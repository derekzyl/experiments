import axios from "axios";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import mockResponses from "../mock_responses/mock-reponses";

import SpellingFixer from "../src/components/SpellingFixer";
// import React from "react";

// import React from "react";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;
jest.setTimeout(5000);

describe("SpellingFixer", () => {
  const makeGetMock = (params: any) => {
    mockAxios.get.mockImplementation(
      (url: string, options: any): Promise<any> => {
        console.log("this is the url", url, options);
        if (
          url.includes("corrections") &&
          options.params &&
          options.params.word in params
        ) {
          return Promise.resolve({ data: params[options.params.word] }); // Return correct response object
        }

        return Promise.reject({ status: 422 });
      }
    );
  };

  const makePostMock = (mockResponse: any, uncorrectedText: string) => {
    mockAxios.post.mockImplementationOnce(
      (url: string, params: any): Promise<any> => {
        console.log(
          uncorrectedText,
          "<-----------------------uncorrected text",
          params,
          "----------------------------->"
        );
        if (
          url.includes("checkspelling") &&
          params &&
          params.corpus === uncorrectedText
        ) {
          return Promise.resolve(mockResponse);
        }

        return Promise.reject({ status: 492 });
      }
    );
  };

  afterEach(() => jest.resetAllMocks());

  for (const mock of mockResponses) {
    it(`should correct "${mock.corpus}" -> "${mock.expected}"`, async () => {
      makePostMock(mock.POST, mock.corpus);
      makeGetMock(mock.GET);
      render(<SpellingFixer corpus={mock.corpus} />);
      const text = await screen.findByTestId("corrected-text");
      expect(mockAxios.post).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledTimes(
        Object.values(mock.GET).length
      );
      expect(text).toHaveProperty(mock.expected);
    });
  }
});

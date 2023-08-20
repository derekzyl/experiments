import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ShowCorrected from "./ShowCorrected";

type Props = { corpus: string };

const SpellingFixer = ({ corpus }: Props) => {
  const [loading, setLoading] = useState(true);
  const [corrected, setCorrected] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const correctedText = await handleData(corpus);
      const postResult = await handlePost(corpus, correctedText);
      setCorrected(correctedText ?? postResult); // Set the corrected text if available from the post request
      setLoading(false);
    };

    fetchData();
  }, [corpus]);

  return (
    <>
      {loading ? <LoadingSpinner /> : <ShowCorrected text={corrected || ""} />}
    </>
  );
};

async function handleData(data: string) {
  const split_data = data.split(" ");
  const final_string: string[] = [];

  const url =
    "https://us-east1-serverless-306422.cloudfunctions.net/spellchecker";
  for (const dat of split_data) {
    const get_data = await axios.get(`${url}/corrections`, {
      params: { word: dat },
    });

    const correctedWord = get_data.data.corrections?.[0];
    final_string.push(correctedWord || dat);
  }

  const get_combined_data = final_string.join(" ");
  return get_combined_data;
}

async function handlePost(dat: string, original_doc: string) {
  let res;
  const split_data = original_doc.split(" ");
  const final_string: string[] = dat.split(" ");

  const misspelledWords = final_string.filter((word, index) => {
    return word !== split_data[index];
  });
  const get_d = misspelledWords.join(" ");
  const datd = { corpus: get_d };
  const url =
    "https://us-east1-serverless-306422.cloudfunctions.net/spellchecker";
  if (get_d.trim().length > 0) {
    res = await axios.post(`${url}/checkspelling`, datd);
    console.log("<--------------------- res.data", res);
  }
  return res?.data;
}

export default SpellingFixer;

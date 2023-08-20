import "./ShowCorrected.scss";

type Props = { text: string };

const ShowCorrected = ({ text }: Props) => (
  <div className="corrected-text" data-testid="corrected-text">
    {text}
  </div>
);
export default ShowCorrected;

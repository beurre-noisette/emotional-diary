import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();

  return <div>From {params.id}</div>;
};

export default Diary;

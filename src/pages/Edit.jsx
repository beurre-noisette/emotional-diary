import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import { DiaryDispatchContext, DiaryStateContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id),
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id]);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하실건가요?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 수정하시겠습니까?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  return (
    <>
      <div>
        <Header
          title="일기 수정하기"
          leftChild={<Button text="< 뒤로가기" onClick={() => nav(-1)} />}
          rightChild={
            <Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete} />
          }
        />
      </div>
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </>
  );
};

export default Edit;

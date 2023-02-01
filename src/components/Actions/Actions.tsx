import Action from "../Action/Action";

const Actions = () => {
  return (
    <>
      <Action href={"call"} className={"call"} innerText={"Call"} />
      <Action
        href={"hang-up"}
        className={"hang active"}
        innerText={"Hang up"}
      />
    </>
  );
};

export default Actions;

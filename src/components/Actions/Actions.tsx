import Action from "../Action/Action";

const Actions = () => {
  return (
    <div className="actions">
      <Action href={"call"} className={"Call"} innerText={"Call"} />
      <Action
        href={"hang-up"}
        className={"hang active"}
        innerText={"Hang up"}
      />
    </div>
  );
};

export default Actions;

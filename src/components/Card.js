import React from "react";

const Card = props => {
  let clas = !!props.room.enabled
    ? "card mb-3 bg-gradient-light"
    : "card mb-3 bg-light";
  return (
    <div className={clas} style={{ maxWidth: "8rem" }}>
      <div className="card-header">
        <input
          type="checkbox"
          name={"room" + props.room.num}
          value={props.room.num}
          checked={!!props.room.enabled}
          onChange={props.toggleEnable}
        />
        Room {props.room.num}
      </div>
      <div className="card-body row">
        <div>
          <p>
            Adults <br />
            (18+)
            <br />
            <select
              value={props.room.adults}
              disabled={!props.room.enabled}
              onChange={props.toggleSelect.bind(this, props.room.num, "adults")}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </p>
        </div>
        <div>
          <p>
            Children <br />
            (0-17)
            <br />
            <select
              value={props.room.children}
              disabled={!props.room.enabled}
              onChange={props.toggleSelect.bind(
                this,
                props.room.num,
                "children"
              )}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

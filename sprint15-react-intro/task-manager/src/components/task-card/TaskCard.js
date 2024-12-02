import "./TaskCard.css";
import DateContainer from "../date-container/DateContainer";
import Badge from "../badge/Badge";

function TaskCard(props) {
    return (
        <div className="card-wrapper">
            <div className="card-header">
                <p className="task-id">{props.id}</p>
                <Badge label={props.status} />
            </div>
            <div className="card-content">
                <p>{props.name}</p>
            </div>
            <div className="card-footer">
                <DateContainer date={props.dueDate} />
            </div>
        </div>
    );
}

export default TaskCard;
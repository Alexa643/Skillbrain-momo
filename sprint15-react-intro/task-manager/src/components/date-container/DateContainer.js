import "./DateContainer.css";

function getDateFormat(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export default function DateContainer(props) {
    return (
        <div className="due-date">
            <p>Due Date</p>
            <p>{getDateFormat(props.date)}</p>
        </div>
    );
}
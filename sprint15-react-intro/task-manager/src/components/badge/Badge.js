import "./Badge.css";

function Badge(props) {
    return (
        <div className="badge">
            <p>{props.label}</p>
        </div>
    );
}

export default Badge;
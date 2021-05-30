import "./Page.css"

export default function Page(props) {

    return (
        <div className="Page" style={{ transform: "translate(" + props.position + "vw)", position: "absolute", zIndex: -props.position }}>
            {props.children}
        </div>
    );
}
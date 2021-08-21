import Footer from "../Footer"
import "./Page.css"

export default function Page(props) {
    const active = props.position === "0";


    return (
        active
        ?
        <div className="Page">
            {props.children}
            <Footer />
        </div>
        :
        <div className="Page" style={{ transform: "translate(" + props.position + "vw)"}}>
            {props.children}
            <Footer />
        </div>
    );
}
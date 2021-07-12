import Footer from "../Footer"
import "./Page.css"

export default function Page(props) {
    const popupOpen = props.popupOpen != null ? props.popupOpen : false;
    return (
        popupOpen
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
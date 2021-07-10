import Footer from "../Footer"
import "./Page.css"

export default function Page(props) {

    return (
        <div className="Page" style={{ transform: "translate(" + props.position + "vw)", position: "absolute", zIndex: 2 }}>
            {props.children}
            <Footer />
        </div>
    );
}
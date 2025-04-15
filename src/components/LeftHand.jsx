import "../asset/fonts/fontawesome-free-6.1.1-web/css/all.css"; // import the font awsome file
import placeholder from "../asset/images/placeholder.jpg";
import "../asset/css/App.css"; // import the css file
import "../dependencies/bootstrap-5.2.0-dist/css/bootstrap.min.css"; //import bootstrap

function LeftHand() {
    return (
        <div className="left d-flex flex-column w-25 column-gap text-center rounded rounded-left py-5 fs-5">
            <div className="pb-5"><img className="w-25 rounded rounded-circle" src={placeholder} alt="" /></div>            
            <a className="py-4 text-dark" href=""><i className="fa-solid fa-home"></i></a>
            <a className="py-4 text-dark" href=""><i className="fa-solid fa-bell"></i></a>
            <a className="py-4 text-dark" href=""><i className="fa-solid fa-right-left"></i></a>
            <a className="py-4 text-dark" href=""><i className="fa-solid fa-mobile"></i></a>
            <a className="py-4 text-dark" href=""><i className="fa-solid fa-gear"></i></a>
        </div>
    );
}

export default LeftHand;
import "../asset/css/App.css"; // import the css file
import "../dependencies/bootstrap-5.2.0-dist/css/bootstrap.min.css"; //import bootstrap
import "../asset/fonts/fontawesome-free-6.1.1-web/css/all.css"; // import the font awsome file

function Card() {
    return (
        <div className="card h-50">
            <div className="card-body position-relative m-3 p-5 bg-dark text-white rounded">
                <p className="card-title ">Account Number</p>
                <p className="card-subtitle position-absolute end-0 p-5 ">C V V</p>
                <p className="card-text position-absolute bottom-0 p-5">Full Name</p>
            </div>
        </div>
    );
}

export default Card;
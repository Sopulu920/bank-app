import Header from "./Header.jsx";
import "../dependencies/bootstrap-5.2.0-dist/css/bootstrap.min.css"; //import bootstrap
import Card from "./Card.jsx";
import Transfer from "./Transfer.jsx";

function RightHand() {
    return (
        <>
            <div className="w-75 d-flex flex-column">
                <Header />
                <Card />
                <Transfer />
            </div>

        </>
    );
}

export default RightHand;
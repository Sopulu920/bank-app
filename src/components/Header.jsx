import "../asset/css/App.css"; // import the css file
import "../dependencies/bootstrap-5.2.0-dist/css/bootstrap.min.css"; //import bootstrap
import "../asset/fonts/fontawesome-free-6.1.1-web/css/all.css"; // import the font awsome file

let lastName = "Morah";
let user = lastName

function Header() {
    return (
        <header className="p-3 m-3 fs-5 rounded">            
                <h1>Hi, {user} </h1>
        </header>
    );
}

export default Header;
import globeLogo from "../assets/globe.png"
function Header() {
    return (
        <header>
            <img src={globeLogo} alt="globe icon"/>
            <h1>Travel Journal</h1>
        </header>
    )
}

export default Header;
const Navigation =() => {
    return (
        <nav className="container">
            <div className="logo"></div>
            <img src="/images/brand_logo.png" alt="logo" />
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>login</button>
        </nav>
    );
};

export default Navigation;
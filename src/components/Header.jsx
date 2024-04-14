const Header = (props) => {
            return(
            <div>
                <h1 className="font-bold text-3xl">Hello {props.username}!</h1>
                <p className="text-xl">I help you manage your activities 🎯</p>
            </div>
            );
}

export default Header;
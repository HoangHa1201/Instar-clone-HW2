import NavBar from '~/components/Layout/components/NavBar';

function NavBarOnly({ children }) {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default NavBarOnly;

import "../style/styles.css";

const NavButton = ({ name, onClick, isActive }) => {
    const isClicked = isActive ? 'activeButton' : 'myButton';

    return (
        <button className={isClicked} onClick={onClick}>
            {name}
        </button>
    )
}


export default NavButton;
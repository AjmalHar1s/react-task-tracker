import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Click ME!');
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={ showAdd ? 'Red' : 'Green' } text={ showAdd ? 'Close' : 'Add' } onClick={onAdd} />
        </header>
    )
}

export default Header;
import Menu from "./Menu"
import Search from "./Search"


export default function Nav(props) {
    return (
        <header>
            <Menu />
            <h1 className='title'>Welcome to <b>Quotey</b><br/><small>The internet's best random quote generator</small></h1>
            <Search
            {...props}
            />
        </header>
    )
}
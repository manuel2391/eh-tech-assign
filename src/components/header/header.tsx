import "./header.css"
import ehLogo from "../../assets/eh_logo.svg"

type HeaderProps = {
    logoOnClick ? : ()=> void
}

const Header = (props:HeaderProps)=>{
    return(
        <>
            <header className="eh-header w-full">
                <img className="eh-logo" src={ehLogo} alt="eh logo" onClick={()=>{
                    if(props.logoOnClick){
                        props.logoOnClick();
                    }
                }}/>
            </header>
        </>
    )
}

export default  Header;
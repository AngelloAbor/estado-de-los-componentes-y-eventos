import { faFacebook, faGithub, faLinkedinIn,faTwitter } from "@fortawesome/free-brands-svg-icons"
import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

function Registro({message,setAlert}){
    return (
        <>
            <section>
                <h1>Crea una cuenta</h1>
            <div className="social">
                <SocialButton icon={faFacebook}></SocialButton>
                <SocialButton icon={faGithub}></SocialButton>
                <SocialButton icon={faLinkedinIn}></SocialButton>
                <SocialButton icon={faTwitter}></SocialButton>
                
            </div>
            <h6>Puedes usar tu email para registrarte</h6>
            <Formulario setAlert={setAlert}></Formulario>
                <Alert color={message.color} msg={message.msg}></Alert>
            </section>
        </>
    )
}

export default Registro
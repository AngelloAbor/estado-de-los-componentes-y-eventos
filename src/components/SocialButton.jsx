import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SocialButton ({icon}){
    return (
        <figure>
            <FontAwesomeIcon icon={icon} size="2x"></FontAwesomeIcon>
        </figure>
    )
}
export default SocialButton
import styled from "styled-components";


const Button = styled.button`
    padding: 0.8rem 2rem;
    margin: 0.4rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

    background: ${function (props) {
        if (props.variant === "primary") { 
            return "radial-gradient(circle, rgba(151,78,204,1) 0%, rgba(0,0,0,1) 43%, rgba(151,78,204,1) 47%, rgba(0,0,0,1) 58%, rgba(151,78,204,1) 62%, rgba(151,78,204,1) 63%, rgba(0,0,0,1) 87%, rgba(151,78,204,1) 89%, rgba(0,0,0,1) 93%)";

        } else if (props.variant === "secondary") {
            return "radial-gradient(circle, rgba(78,101,204,1) 0%, rgba(0,0,0,1) 43%, rgba(78,101,204,1) 47%, rgba(0,0,0,1) 58%, rgba(78,101,204,1) 62%, rgba(73,95,192,1) 63%, rgba(0,0,0,1) 87%, rgba(78,101,204,1) 89%, rgba(0,0,0,1) 93%)";
            
        }  else { 
            return "#4361ee";
        }
        }};
        
`;
export default Button;
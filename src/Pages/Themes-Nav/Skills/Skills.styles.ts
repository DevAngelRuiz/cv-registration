import styled from "styled-components";

export const Container = styled.div`
width: 60%; 
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 20px 50px;
border-radius: 20px;
opacity: 0.8; 
flex-direction: column;

`
export const Info = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
text-align: center;
position: relative;

textarea{
    padding: 10px;
    width: 600px;
    height: 200px;
    border-radius: 20px;
    text-align: justify;
    position: relative;

}
button{
   margin-right: 20px;
    align-self: flex-end;
    margin-top: 10px;
    background-color: #4B0082;
    color: white;
    position: relative;

}
button:active{
    opacity: 0.9;
}
`
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
justify-content: center;
flex-direction: column;
align-items: center;


input{
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 400px;
height: 50px;
border-radius: 20px;
padding-left: 10px;

}

span{
    font-size: 12px;
    color: red; 
    padding-bottom: 10px;
}


button{
    width: 100px;
    margin-top: 10px;
    background-color: #4B0082;
    color: white;
    position: relative;

}
button:active{
    opacity: 0.9;
}


`

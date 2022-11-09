import styled from "styled-components";

export const Container = styled.div`
width: 30%; 
border-right: 1px solid #ccc;
height: 80%;

`

export const ContainerItems = styled.div`
position: relative;
width: 400px;




`

export const Item = styled.div`
display: grid;
grid-template-columns: 200px 200px;
justify-content: space-between;
align-items: center;
margin: 20px;
padding: 20px 10px;
opacity: 0.9;
background: white;
border-radius: 20px;
position: relative;



:hover{
    opacity: 0.8; 
}


h2{
    text-align: center;
 
    color: #4B0082;
    font-size: 30px;
    font-weight: 900;

    
}
p{
    margin-top: -15px;
    text-align: center;
    color: #363636; 

}

img{

    width: 90px;
    align-items: center;
    justify-content: center;
    transform: translate(50px, 12px);
    position: relative;
    
  
}


`



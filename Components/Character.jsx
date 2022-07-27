import styled from 'styled-components'; 

export const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: center;
padding-bottom:30px;
width:100%;
height:100%;
margin-top:25px;
background-color: black;

img{
   border-radius:8px;
   border-bottom-left-radius:0px;
 border-bottom-right-radius:0px;
  width:100%;
  display: block !important;
}


`
export const Name = styled.div`
   font-size: 25px;
  left: 20px;
  margin-top:-75px;
  padding-left:15px;
  text-overflow:ellipsis;
  overflow:hidden;
  background: #101010;
  opacity: 0.7;
  box-shadow: 0px,0px,100px,#8888;
  width:100%;
  color: white;

  p{
 font-size:12px;
  }
` 

export const Space = styled.div`
 padding:10px;
 
`

export const CardDetails = styled.div`
    display:flex;
   margin-bottom: 15px;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid #FAF9F6;
   margin-top:-10px;
   opacity:0.6;
   height:100%;
   font-size: 12px;
   color: white;

   p{
    margin-left: 8px;
   }

  
    
   
` 
export const CardDetails1 = styled.div`
   border-bottom: none;
   display:flex;
   margin-bottom: 15px;
   justify-content: space-between;
   align-items: center;
   margin-top:-10px;
   opacity:0.6;
   height:100%;
   font-size: 12px;
   color: white;
`
export const CardContent = styled.div`
background-color: #353232;
display: flex;
flex-direction: column;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
width:100%;
height: 300px;
padding: 10px;
`
export const Value = styled.div`
   color: white;
`
export const CardKey = styled(Value)({
   fontStyle:'italic',
   color: 'orange',
   paddingRight: '8px',
});

export const CardWrapper = styled('div')({
 display:'flex',
 flexDirection: 'row',
justifyContent:'center',
width: '100%',
height: '300px',
alignItem: 'center',


 
});

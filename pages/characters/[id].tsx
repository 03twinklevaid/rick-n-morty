import { useGetPostsQuery } from '../api/character-api'
import { useRouter } from 'next/router'
import { CardDetails, Container,  Name, Space, CardContent, Value, CardWrapper, CardKey, CardDetails1} from '../../Components/Character'
import Image from 'next/image'


const CharacterDetail = () => {
  const obj1 = {
      "id": 1,
      "name": "Rick Sanchez",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
      "name": "Citadel of Ricks",
      "url": "https://rickandmortyapi.com/api/location/3"
      },
      
  }
  return(
<div>

      <Container>
      
        <Space>
        
<Image src={obj1.image} alt={obj1.name} width={300} height={300} />
<CardWrapper > 
<CardContent>

<CardDetails>

                      <Value>NAME</Value>
                      <CardKey>{obj1.name}</CardKey>
                    </CardDetails>
                    <CardDetails>
                      <Value>STATUS</Value>
                      <CardKey> {obj1.status} </CardKey>
                    </CardDetails>
                    <CardDetails>
                      <Value>SPEICES </Value>
                      <CardKey>{obj1.species}</CardKey>
                    </CardDetails>
                    <CardDetails>
                      <Value>GENDER</Value>
                      <CardKey>{obj1.gender}</CardKey>
                    </CardDetails>
                    <CardDetails>
                      <Value>ORIGIN </Value>
                      <CardKey>{obj1.origin.name}</CardKey>
                    </CardDetails>
                    <CardDetails1>
                      <Value>LASTLOCATION </Value>
                      <CardKey>{obj1.origin.name}</CardKey> 
                    </CardDetails1>
                   
                   
                     </CardContent>
                     </CardWrapper>
                  </Space>
                  
                  </Container>
                 
                
  
</div>

  )
}
  
export default CharacterDetail
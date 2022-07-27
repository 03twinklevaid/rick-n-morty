import type { NextPage } from 'next'
import { useGetPostsQuery } from '../api/character-api'
import {
  CardDetails,
  Container,
  Name,
  Space,
  CardContent,
  Value,
  CardKey,
  CardDetails1,
} from '../../Components/Character'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Characters: NextPage = () => {
  const { data: charactersData, isLoading } = useGetPostsQuery()
  const router = useRouter()

  console.log('data', charactersData)

  const handleCharacterClick = (id: number) => {
    router.push(`/characters/${id}`)
  }

  return (
    
    <Container>
      {isLoading && <h1>Loading...</h1>}
      {charactersData &&
      charactersData.results &&
      charactersData.results.length
        ? charactersData.results.map(char => {
            return (
              <Space
                key={char.id}
                onClick={() => handleCharacterClick(char.id)}
              >
                <Image
                  src={char.image}
                  alt={char.name}
                  height={320}
                  width={320}
                />

                <Name>
                  {char.name}
                  <p>Id:{char.id}-created {char.created}</p>
                </Name>
                <CardContent>
                  <CardDetails>
                    <Value>STATUS</Value>
                    <CardKey> {char.status} </CardKey>
                  </CardDetails>
                  <CardDetails>
                    <Value>SPECIES </Value>
                    <CardKey>{char.species}</CardKey>
                  </CardDetails>
                  <CardDetails>
                    <Value>GENDER</Value>
                    <CardKey>{char.gender}</CardKey>
                  </CardDetails>
                  <CardDetails>
                    <Value>ORIGIN</Value>
                    <CardKey>{char.origin.name}</CardKey>
                  </CardDetails>
                  <CardDetails1>
                    <Value>LASTLOCATION</Value>
                    <CardKey>{char.location.name}</CardKey>
                    </CardDetails1>
                
                  
                  
                </CardContent>
              </Space>
            )
          })
        : !isLoading && <h1>No Data Available</h1>}
    </Container>
  
  )
}
export default Characters
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useGetPostsQuery } from '../pages/api/character-api'
import {
  CardDetails,
  Container,
  Name,
  Space,
  CardContent,
  Value,
} from './Character'

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
                height={300}
                width={300} />

              <Name>
                {char.name}
                <p>Id:110 creates 2years ago</p>
              </Name>
              <CardContent>
                <CardDetails>
                  <Value>Status</Value>
                  <Value> {char.status} </Value>
                </CardDetails>
                <CardDetails>
                  <Value>hhhpecies </Value>
                  <Value>{char.species}</Value>
                </CardDetails>
                <CardDetails>
                  <Value>Gender</Value>
                  <Value>{char.gender}</Value>
                </CardDetails>
                <CardDetails>
                  <Value>Origin</Value>
                  <Value>{char.origin.name}</Value>
                </CardDetails>
                <CardDetails>
                  <Value>LastLocation</Value>
                  <Value>{char.location.name}</Value>
                </CardDetails>
              </CardContent>
            </Space>
          )
        })
        : !isLoading && <h1>No Data Available</h1>}
    </Container>
  )
}
}

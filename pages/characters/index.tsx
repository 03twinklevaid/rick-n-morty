import type { NextPage } from 'next'
import { useGetPostsQuery } from '../api/character-api'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

const Characters: NextPage = () => {
  const { data: charactersData, isLoading } = useGetPostsQuery()
  const router = useRouter()

  console.log('data', charactersData)

  const handleCharacterClick = (id: number) => {
    router.push(`/characters/${id}`)
  }

  return (
    <div className={styles.container}>
      {isLoading && <h1>Loading...</h1>}
      {charactersData && charactersData.results && charactersData.results.length
        ? charactersData.results.map(char => {
            return (
              <div key={char.id} onClick={() => handleCharacterClick(char.id)}>
                {char.name}
                <span className={styles.image}>
                  <img src={char.image} alt={char.name} />
                </span>
              </div>
            )
          })
        : !isLoading && <h1>No Data Available</h1>}
    </div>
  )
}
export default Characters

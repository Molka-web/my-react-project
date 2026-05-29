import { useState, useEffect } from 'react'

const courseTitle = "Web Development 2"
const API_BASE_URL = 'https://hn.algolia.com/api/v1/search?query='

// ========== WEEK 8-9 COMPONENTS ==========

const Header = () => {
  return (
    <header>
      <h1>Hacker News Reader</h1>
      <p>Top tech stories from the community</p>
    </header>
  )
}

const InputWithLabel = ({ id, type = "text", value, onInputChange, children }) => {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  )
}

const Item = ({ story, onRemoveItem }) => {
  return (
    <div>
      <h3>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h3>
      <p>By: {story.author} | ⭐ {story.points} points | 💬 {story.num_comments} comments</p>
      <button type="button" onClick={() => onRemoveItem(story.objectID)}>
        Dismiss
      </button>
    </div>
  )
}

const List = ({ stories, onRemoveItem }) => {
  return (
    <div>
      <h2>Top Stories</h2>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  )
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [url, setUrl] = useState('')
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // Load saved search from localStorage
  useEffect(() => {
    const savedSearch = localStorage.getItem('search')
    if (savedSearch) {
      setSearchTerm(savedSearch)
    }
  }, [])

  // Save searchTerm to localStorage
  useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm])

  // Fetch stories when URL changes
  useEffect(() => {
    if (!url) return

    const fetchStories = async () => {
      setIsLoading(true)
      setIsError(false)
      
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        const data = await response.json()
        setStories(data.hits || [])
      } catch (error) {
        setIsError(true)
        console.error('Fetch error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStories()
  }, [url])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = () => {
    if (searchTerm.trim()) {
      setUrl(`${API_BASE_URL}${searchTerm}`)
    }
  }

  const handleRemoveStory = (objectID) => {
    const newStories = stories.filter((story) => story.objectID !== objectID)
    setStories(newStories)
  }

  const studentName = "Molka"

  const student = {
    name: "Molka",
    age: 22,
    track: "Computer Science"
  }

  const sayHello = () => {
    return `Hello ${studentName}! Welcome to ${courseTitle}`
  }

  return (
    <div>
      <Header />
      
      <h1>My React Learning Journey</h1>
      <p>Student: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button 
        type="button" 
        onClick={handleSubmit}
        disabled={!searchTerm.trim()}
      >
        Submit
      </button>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      {isLoading && <p>Loading stories...</p>}
      {isError && <p>Something went wrong. Please try again.</p>}
      {!isLoading && !isError && <List stories={stories} onRemoveItem={handleRemoveStory} />}
    </div>
  )
}

export default App

// ========== WEEK 9 REFLECTION ==========
// Why use useEffect for fetching?
//    Because fetching is a side effect that should happen after render
//
// What is the difference between loading and error state?
//    Loading shows during fetch, error shows when fetch fails
//
// Why control when fetching happens?
//    To avoid unnecessary API calls and rate limiting
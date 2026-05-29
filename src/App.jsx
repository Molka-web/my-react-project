import { useState, useEffect } from 'react'

const courseTitle = "Web Development 2"

// ========== WEEK 8 COMPONENTS ==========

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
  console.log("List rendered")
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
  console.log("App rendered")
  
  // Initialize searchTerm from localStorage
  const getInitialSearchTerm = () => {
    const savedSearch = localStorage.getItem('search')
    return savedSearch || ''
  }
  
  const [searchTerm, setSearchTerm] = useState(getInitialSearchTerm)
  
  // Save to localStorage whenever searchTerm changes
  useEffect(() => {
    localStorage.setItem('search', searchTerm)
    console.log('Saved to localStorage:', searchTerm)
  }, [searchTerm])
  
  const initialStories = [
    {
      objectID: 1,
      title: "React 19 Released with New Features",
      url: "https://react.dev/blog/2024/react-19",
      author: "react_team",
      points: 500,
      num_comments: 89
    },
    {
      objectID: 2,
      title: "Understanding useEffect Hook",
      url: "https://example.com/useEffect-guide",
      author: "dev_learner",
      points: 127,
      num_comments: 34
    },
    {
      objectID: 3,
      title: "Why Vite is Faster Than Create React App",
      url: "https://vitejs.dev/guide/why.html",
      author: "vite_team",
      points: 256,
      num_comments: 67
    }
  ]

  const [stories, setStories] = useState(initialStories)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleRemoveStory = (objectID) => {
    const newStories = stories.filter((story) => story.objectID !== objectID)
    setStories(newStories)
  }

  const filteredStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

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

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      <List stories={filteredStories} onRemoveItem={handleRemoveStory} />
    </div>
  )
}

export default App

// ========== WEEK 8 REFLECTION ==========
// What makes a component reusable?
//    Generic props (not domain-specific like "searchTerm"), no hard-coded values
//
// What is component composition?
//    Using children prop to pass JSX content into a component
//
// Why do we pass handlers down the component tree?
//    To keep state in the parent component while allowing child components to trigger updates
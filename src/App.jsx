import { useState, useEffect } from 'react'

const courseTitle = "Web Development 2"

// ========== WEEK 7 COMPONENTS ==========

const Header = () => {
  return (
    <header>
      <h1>Hacker News Reader</h1>
      <p>Top tech stories from the community</p>
    </header>
  )
}

const Search = ({ searchTerm, onSearch }) => {
  console.log("Search rendered")
  return (
    <div>
      <label htmlFor="searchInput">Search stories:</label>
      <input 
        type="text" 
        id="searchInput" 
        value={searchTerm}
        onChange={onSearch}
        placeholder="Search by title..."
      />
    </div>
  )
}

const Item = ({ story }) => {
  return (
    <div>
      <h3>
        <a href={story.url} target="_blank" rel="noopener noreferrer">
          {story.title}
        </a>
      </h3>
      <p>By: {story.author} | ⭐ {story.points} points | 💬 {story.num_comments} comments</p>
    </div>
  )
}

const List = ({ stories }) => {
  console.log("List rendered")
  return (
    <div>
      <h2>Top Stories</h2>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
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
  
  const stories = [
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
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

      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      <List stories={filteredStories} />
    </div>
  )
}

export default App

// ========== WEEK 7 REFLECTION ==========
// What is a controlled component?
//    A component where React controls the input value via state
//
// What is a side effect in React?
//    Operations that interact with the outside world (localStorage, API calls)
//
// Why do we use useEffect instead of calling code directly?
//    To avoid running side effects on every render unnecessarily
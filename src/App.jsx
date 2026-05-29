import { useState } from 'react'

const courseTitle = "Web Development 2"

// ========== WEEK 6 COMPONENTS ==========

const Header = () => {
  return (
    <header>
      <h1>Hacker News Reader</h1>
      <p>Top tech stories from the community</p>
    </header>
  )
}

const Search = (props) => {
  console.log("Search rendered")
  return (
    <div>
      <label htmlFor="searchInput">Search stories:</label>
      <input 
        type="text" 
        id="searchInput" 
        onChange={props.onSearch}
        placeholder="Search by title..."
      />
    </div>
  )
}

const Item = (props) => {
  return (
    <div>
      <h3>
        <a href={props.story.url} target="_blank" rel="noopener noreferrer">
          {props.story.title}
        </a>
      </h3>
      <p>By: {props.story.author} | ⭐ {props.story.points} points | 💬 {props.story.num_comments} comments</p>
    </div>
  )
}

const List = (props) => {
  console.log("List rendered")
  return (
    <div>
      <h2>Top Stories</h2>
      {props.stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  )
}

const App = () => {
  console.log("App rendered")
  
  const [searchTerm, setSearchTerm] = useState('')
  
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

      <Search onSearch={handleSearch} />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      <List stories={filteredStories} />
    </div>
  )
}

export default App

// ========== WEEK 6 REFLECTION ==========
// What is the difference between props and state?
//    Props are passed from parent to child (read-only)
//    State is internal to a component (can be updated)
//
// Why do we lift state up?
//    To share state between multiple components that need it
//
// Where should filtering logic live?
//    In the component that owns the data (App component)
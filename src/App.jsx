// =========== WEEK 3 LAB: HACKER NEWS STORIES ==========
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

const courseTitle = "Web Development 2"

// ========== WEEK 5: ARROW FUNCTIONS ==========

const Header = () => {
  return (
    <header>
      <h1>Hacker News Reader</h1>
      <p>Top tech stories from the community</p>
    </header>
  )
}

const Search = () => {
  const handleInput = (event) => {
    console.log("User is typing...")
    console.log("Current value:", event.target.value)
  }

  return (
    <div>
      <label htmlFor="studentInput">Enter your name:</label>
      <input type="text" id="studentInput" onChange={handleInput} />
    </div>
  )
}

const List = () => {
  return (
    <div>
      <h2>Top Stories</h2>
      {stories.map((story) => (
        <div key={story.objectID}>
          <h3>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </h3>
          <p>By: {story.author} | ⭐ {story.points} points | 💬 {story.num_comments} comments</p>
        </div>
      ))}
    </div>
  )
}

const App = () => {
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

      <Search />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      <List />
    </div>
  )
}

export default App

// ========== WEEK 5 REFLECTION ==========
// When do we use concise body arrow functions?
//    When the function only returns a single expression
//
// When do we use block body arrow functions?
//    When we need multiple statements or logic
//
// What does an event object contain?
//    Information about the event including target.value
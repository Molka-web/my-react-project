// =========== WEEK 3 LAB: HACKER NEWS STORIES ===========
// Data structure for each story:
// - title: article title
// - url: link to article
// - author: who posted it
// - objectID: unique identifier (used as React key)
// - points: popularity score
// - num_comments: number of comments

// Which property should be used as the React key? objectID because it's unique
// Why is this structure realistic for an API? Real APIs return arrays of objects.

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

function App() {
  const studentName = "Molka"

  const student = {
    name: "Molka",
    age: 22,
    track: "Computer Science"
  }

  function sayHello() {
    return `Hello ${studentName}! Welcome to ${courseTitle}`
  }

  return (
    <div>
      <h1>My React Learning Journey</h1>
      <p>Student: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>

      <label htmlFor="studentInput">Enter your name:</label>
      <input type="text" id="studentInput" />

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>

      <p>{sayHello()}</p>

      <h2>Top Stories</h2>
      {stories.map(function(story) {
        return (
          <div key={story.objectID}>
            <h3>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
              </a>
            </h3>
            <p>By: {story.author} | ⭐ {story.points} points | 💬 {story.num_comments} comments</p>
          </div>
        )
      })}
    </div>
  )
}

export default App

// ========== WEEK 3 REFLECTION ==========
// 1. Why is map() essential for rendering lists in React?
//    Because it transforms an array into an array of JSX elements automatically.
// 2. Why is objectID the correct key?
//    Because it's unique and stable across renders
// 3. What will change when we replace fake data with the Hacker News API?
//    We'll use fetch() or axios to get real data, and the data will come from the internet
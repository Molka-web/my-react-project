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
    </div>
  )
}

export default App

// ========== REFLECTION ==========
// 1. One thing I understand well: Using {} for JS expressions
// 2. One thing that is still confusing: How to get input value
// 3. One mistake I made and fixed: Variable names must match
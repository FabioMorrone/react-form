import { useState } from 'react'



export default function App() {
  const title = ["Task1", "Task2", "Task3", "task4"]

  const [titles, setTitles] = useState(title)

  const addTask = e => {
    e.preventDefault()
    tasks.push(titles);


  }



  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='card'>
            {
              titles.map((item) => <div>{item}</div>)
            }

          </div>
          <form onSubmit={addTask}>
            <input
              type="text"
              value={titles}
              onChange={e => { setTitles(e.target.value) }}
            />
            <button>Invia</button>
          </form>




        </div>
      </div>

    </>
  )
}




const App = () => {
  const [todoTitle, setTodoTitle] = React.useState('Надо сделать')
  const [doingTitle, setDoingTitle] = React.useState('Делаю')
  const [doneTitle, setDoneTitle] = React.useState('Готовенько')
  const renameClick = () => {
    setTodoTitle(prompt('введите значение', todoTitle))
  }
  const renameClick2 = () => {
    setDoingTitle(prompt('введите значение', doingTitle))
  }
  const renameClick3 = () => {
    setDoneTitle(prompt('введите значение', doneTitle))
  }
  return (
    <div className="app">
      <div className="todo_board">
        <div className="todo_title">
          <div>
            <h3>{todoTitle}</h3>
          </div>
          <div>
            <button className="rename_board" onClick={renameClick}></button>
          </div>
        </div>
        <div className="todo_tasklist">
          <div className="todo_card"></div>
        </div>
      </div>
      <div className="doing_board">
        <div className="doing_title">
          <div>
            <h3>{doingTitle}</h3>
          </div>
          <div>
            <button className="rename_board" onClick={renameClick2}></button>
          </div>
        </div>
        <div className="todo_tasklist">
          <div className="doing_card"></div>
        </div>
      </div>
      <div className="done_board">
        <div className="done_title">
          <div>
            <h3>{doneTitle}</h3>
          </div>
          <div>
            <button className="rename_board" onClick={renameClick3}></button>
          </div>
        </div>
        <div className="todo_tasklist">
          <div className="done_card"></div>
        </div>
      </div>
    </div>
  )
}

const conteiner = document.getElementById('contain')
const root = ReactDOM.createRoot(conteiner)
root.render(<App />)

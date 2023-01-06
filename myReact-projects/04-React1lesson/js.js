const App = () => {
  const [buttonText, setbuttonText] = React.useState('Fuck me')
  const [classList, setclassList] = React.useState('')
  const onBtnClick = () => {
    setbuttonText('No thanks')
    setclassList('green-btn')
  }
  return (
    <div className="app">
      <button className={classList} onClick={onBtnClick}>
        {buttonText}
      </button>
    </div>
  )
}

//const myButton = <button className="green-btn">Hi JSX</button>
const conteiner = document.getElementById('app')
const root = ReactDOM.createRoot(conteiner)
root.render(<App />)

const App = (props) => {
  const [buttonText, setbuttonText] = React.useState(props.initialButtonText)
  const [classList, setclassList] = React.useState(props.initialClass)
  const onBtnClick = () => {
    if (buttonText == 'No thanks') {
      setbuttonText(props.initialButtonText)
      setclassList(props.initialClass)
    } else {
      setbuttonText('No thanks')
      setclassList('green-btn')
    }
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
root.render(<App initialButtonText="Click me" initialClass="" />)

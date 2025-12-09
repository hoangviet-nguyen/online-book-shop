import './App.css'
import Header from './components/Header'
import SalesEntry from './components/SalesEntry'


function App() {
  const createSalesRow = (amount: number) => {
    return (
      <div className='flex space-x-4 m-2'>
        {[...Array(amount)].map(() => {
          return (
            <SalesEntry/>
          )
        })}
      </div>
    )
  }


  return (
    <>
    <Header/>
    <div className='flex flex-col items-center justify-center h-screen'>
        {createSalesRow(6)}
        {createSalesRow(6)}
    </div>
    </>
  )
}

export default App

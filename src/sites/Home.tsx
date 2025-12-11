import Header from "../components/Header"
import { createSalesRow } from "../components/SalesEntry"

function Home() {
    return (
        <>
        <Header/>
        <div className='flex flex-col items-center justify-center h-screen'>
            {createSalesRow(5)}
            {createSalesRow(5)}
        </div>
        </>
    )
}

export default Home
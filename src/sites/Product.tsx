import Header from "../components/Header"
import { SalesEntryBig, createSalesRow } from "../components/SalesEntry"


function Product() {
    return (
        <>
            <Header/>
            <div className="flex justify-center w-full mt-25">
                <SalesEntryBig/>
            </div>
            <div className="m-20 text-left">
                <a className="font-bold text-3xl m-5 space-y-2">Ähnliche Produkte: </a>
                <div className="mt-5">{createSalesRow(5)}</div>
            </div>
        </>
    )
}

export default Product
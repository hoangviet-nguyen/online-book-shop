

export function Cart() {
    return (
        <>
        <button className='flex items-center justify-center m-2 border-2 w-23 rounded-2xl'>
            <img src="src/assets/cart.png" className='w-4 h-4 m-2'/>
            <a>Cart</a>
        </button>
        </>
    )
}

export function Buy() {
    return (
        <>
        <button className="text-2xl flex items-center justify-center border-2 rounded-2xl mt-5 m-2 h-10 w-40">
            Buy
        </button>
        </>
    )
}
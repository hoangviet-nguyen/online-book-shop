function Header() {
    return (
        <>
            <div className='w-full h-15 bg-gray-200 flex items-center px-4 fixed top-0 left-0 shadow justify-center'>
                <a href='./' className='font-bold text-3xl m-2'>bookland</a>
                <input className='h-7 m-2 border border-gray-400 rounded-md px-2' placeholder='Search'/>
                <img className='m-2 w-6 h-6' src='./src/assets/login_icon.png'/>
                <a className='m-2'>Login</a>
                <button className='flex items-center justify-center m-2 border-2 w-23 rounded-2xl'>
                    <img src="src/assets/cart.png" className='w-4 h-4 m-2'/>
                    <a>Cart</a>
                </button>
            </div>
        </>
    )
}
export default Header
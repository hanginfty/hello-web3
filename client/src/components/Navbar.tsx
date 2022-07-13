import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '/img/logo.png'
import { useState } from 'react'

const NavItem = ({ title, props }: { title: string; props?: string }) => {
  return (
    <li className={`mx-4 font-bold select-none cursor-pointer ${props}`}>
      {title}
    </li>
  )
}

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      <ul className="text-white md:flex hidden list-none flex-initial justify-between items-center">
        {['Market', 'Exchange', 'Tutorial', 'Wallets'].map((title) => (
          <NavItem title={title} key={title} />
        ))}
        <li className="bg-[#2952e3] font-bold mx-4 px-7 py-2 rounded-full cursor-pointer select-none hover:bg-[#2546bd]">
          Login
        </li>
      </ul>

      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => {
              setToggleMenu(false)
            }}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => {
              setToggleMenu(true)
            }}
          />
        )}

        {/* mobile menu */}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                // fontSize={28}
                // className="text-white md:hidden cursor-pointer"
                onClick={() => {
                  setToggleMenu(false)
                }}
              />
            </li>

            {['Market', 'Exchange', 'Tutorial', 'Wallets'].map((title) => (
              <NavItem title={title} props={'my-2 text-lg'} key={title} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar

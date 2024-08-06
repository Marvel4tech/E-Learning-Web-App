import { IoMdMenu } from "react-icons/io";

const navMenu = [
    {
        id: "1",
        title: "Home",
        path: "/"
    },
    {
        id: "2",
        title: "Services",
        link: "#"
    },
    {
        id: "3",
        title: "About Us",
        link: "#"
    },
    {
        id: "4",
        title: "Our Team",
        link: "#"
    },
    {
        id: "5",
        title: "Contact Us",
        link: "#"
    },
]

const NavBar = () => {
  return (
   <nav>
        <div className="container py-10 flex justify-between items-center">
            <div>
                <h1 className=" font-bold text-2xl">e-Learning Academia</h1>
            </div>
            <div className=" hidden lg:block">
                <ul className=" flex items-center gap-3">
                    {navMenu.map((menu) => (
                        <li key={menu.id}>
                            <a href={menu.path} className=" inline-block py-2 px-3 hover:text-secondary relative group">
                                <div className=" w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 
                                -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>{menu.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
   </nav>
  )
}

export default NavBar
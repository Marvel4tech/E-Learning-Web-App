import { FaAlignJustify } from 'react-icons/fa'

const NavBar = () => {
    const menuBar = [
        {
          id: '1',
          title: 'Home',
          link: '/'
        },
        {
          id: '2',
          title: 'Services',
          link: '#'
        },
        {
          id: '3',
          title: 'About Us',
          link: '#'
        },
        {
          id: '4',
          title: 'Our Team',
          link: '#'
        },
        {
          id: '5',
          title: 'Contact Us',
          link: '#'
        },
      ]
    
  return (
    <nav className=" max-xl:px-10 py-10 flex justify-between items-center max-w-6xl mx-auto">
        <h2 className=" font-bold text-2xl">e-Learning Academia</h2>
        <div className=" max-lg:hidden flex space-x-4">
            <ul className=" flex space-x-4">
                {
                    menuBar.map((menu) => (
                        <li key={menu.id} className=" p-2 font-light hover:text-secondary">
                            <a href={menu.link}>{menu.title}</a>
                        </li>
                    ))
                }
            </ul>
            <button className=" primaryBtn hover:bg-secondary shadow-sm shadow-primary hover:shadow-secondary">Sign In</button>
        </div>
        <div className=" lg:hidden">
            <FaAlignJustify className=' text-3xl'/>
        </div>

    </nav>
  )
}

export default NavBar
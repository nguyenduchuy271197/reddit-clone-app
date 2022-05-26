import Image from 'next/image'
import logo from '@images/logo.svg'
import branch from '@images/branch.svg'
import { HomeIcon, UserAddIcon, SearchIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
      <div className="flex h-10 w-20 cursor-pointer items-center justify-center gap-1">
        <Image src={logo} alt="Reddit Logo" />
        <Image src={branch} alt="Reddit Branch" />
      </div>

      <div className="mx-7 flex items-center gap-1 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <span className="hidden lg:block">Home</span>
        <ChevronDownIcon className="ml-auto h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="flex flex-1 items-center gap-2 space-x-2 rounded-sm border-gray-200 bg-gray-100 px-4 py-2 text-gray-400">
        <SearchIcon className="h-6 w-6" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden></button>
      </form>

      {/* Icons */}
      <div>
          
      </div>
    </div>
  )
}

export default Header

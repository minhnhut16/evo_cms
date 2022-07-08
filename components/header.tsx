import Image from 'next/image';
import HambergerMenu from './HambergerMenu';

const Header = () => (
  <div className="bg-white flex justify-between items-center pt-2 pb-1 px-2 fixed sm:w-[416px] w-full z-[999] sm:top-[2rem] top-0 sm:rounded-tl-lg sm:rounded-tr-lg">
    <div className="w-24">
      <HambergerMenu />
    </div>
    <div className="flex justify-center items-center">
      <Image src="/images/logo.png" alt="logo" width={105} height={65} />
    </div>
    <div className="w-24 flex justify-end">
      <Image src="/images/non-avatar.png" alt="logo" width={40} height={40} />
    </div>
  </div>
);

export default Header;

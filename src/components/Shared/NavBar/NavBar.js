import { setCompToggle, setToogle } from '@/redux/categories/categoriesSlice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaAngleDown, FaXmark } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
const NavBar = () => {
  const { toggle, compToggle } = useSelector((action) => action.category);
  const dispatch = useDispatch();
  const [category, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://pc-server-ktm1cil18-muradwahid.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <nav className="bg-slate-800 relative w-full">
      <div className="mainContainer mx-auto robotoSlabFont flex items-center justify-between">
        <div>
          <p>
            <Link
              className="no-underline text-3xl text-white font-bold uppercase"
              href="/"
            >
              Pc House
            </Link>
          </p>
        </div>
        <div className="md:block hidden">
          <ul className="flex items-center text-white gap-4 lg:text-xl">
            <li>
              <Link
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-orange-400 px-4 py-2 transition-all duration-200 cursor-pointer flex items-center gap-2 componetDrop relative">
              <span>Components</span>
              <FaAngleDown className="dropIcon" />
              <div className="absolute left-0 top-10 scale-y-0 origin-top dropdownMenu !z-50 bg-slate-800 py-3 w-[200px]">
                {category?.data?.map((com) => (
                  <Link
                    key={com._id}
                    className="robotoFont text-[16px] w-full hover:bg-orange-400 py-1 pl-5 block"
                    href={`/components/${com?.categoris}`}
                  >
                    {com.name}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
                href="/products"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
                href="/pc-build"
              >
                Pc Build
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
                href="/login"
              >
                LogIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden !z-50">
          <div onClick={() => dispatch(setToogle(!toggle))}>
            {!toggle ? (
              <GiHamburgerMenu className="text-white" />
            ) : (
              <FaXmark className="text-white" />
            )}
          </div>
          <div
            className={`md:hidden absolute bg-slate-800 left-0 right-0 ${
              toggle ? 'top-9' : '-top-[99999px]'
            }`}
          >
            <ul className="text-white gap-4 lg:text-xl">
              <li
                onClick={() => dispatch(setToogle(!toggle))}
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
              >
                <Link href="/">Home</Link>
              </li>
              <li className="px-4 py-2 transition-all duration-200 cursor-pointer  gap-2">
                <div
                  onClick={() => dispatch(setCompToggle(!compToggle))}
                  className="flex items-center gap-2"
                >
                  <span>Components</span>
                  <FaAngleDown className="dropIcon" />
                </div>
                {compToggle && (
                  <div className="pt-2">
                    {category?.data?.map((com) => (
                      <p
                        onClick={() => dispatch(setToogle(!toggle))}
                        key={com._id}
                      >
                        <Link
                          className="robotoFont text-[16px] w-full hover:bg-orange-400 py-1 pl-5 block"
                          href={`/components/${com?.categoris}`}
                        >
                          {com.name}
                        </Link>
                      </p>
                    ))}
                  </div>
                )}
              </li>
              <li
                onClick={() => dispatch(setToogle(!toggle))}
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
              >
                <Link href="/products">All Products</Link>
              </li>
              <li
                onClick={() => dispatch(setToogle(!toggle))}
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
              >
                <Link href="/pc-build">Pc Build</Link>
              </li>
              <li
                onClick={() => dispatch(setToogle(!toggle))}
                className="hover:bg-orange-400 px-4 py-2 transition-all duration-200"
              >
                <Link href="/login">LogIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

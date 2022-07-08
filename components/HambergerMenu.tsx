/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Link from 'next/link';

import classname from 'utils/classname';

const HambergerMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => setOpen(!open);

  return (
    <>
      <button onClick={handleToggle}>
        <span
          className={classname(
            'w-8 h-[3px] bg-blue block my-1.5 mx-0 rounded-sm transition-all ease-in-out duration-300',
            open && 'rotate-45 translate-y-[9px]',
          )}
        />
        <span
          className={classname(
            'w-5 h-[3px] bg-blue block my-1.5 mx-0 rounded-sm transition-all ease-in-out duration-300',
            open && 'opacity-0',
          )}
        />
        <span
          className={classname(
            'w-8 h-[3px] bg-blue block my-1.5 mx-0 rounded-sm transition-all ease-in-out duration-300',
            open && '-rotate-45 -translate-y-[9px]',
          )}
        />
      </button>

      <ul
        className={classname(
          'fixed left-1/2 -translate-x-1/2 sm:w-[416px] w-full mx-auto sm:top-[calc(2rem_+_78px)] top-[78px] bg-gray-200 overflow-y-auto px-8 m-0 list-none transition-{height} ease-in-out duration-300',
          open ? 'h-[calc(100vh_-_78px)] sm:h-[calc(100vh_-_4rem_-_78px)] py-4' : 'h-0 py-0',
        )}
      >
        <li className="py-4">
          <a
            className="text-black hover:text-black focus:text-black"
            href="https://www.goevo.vn/"
            onClick={handleToggle}
          >
            Trang chủ
          </a>
        </li>
        <li className="py-4 border-t border-gray-500">
          <Link href="/voucher">
            <a className="text-black hover:text-black focus:text-black" onClick={handleToggle}>
              Ưu đãi của bạn
            </a>
          </Link>
        </li>
        <li className="py-4 border-t border-gray-500">
          <a
            className="text-black hover:text-black focus:text-black"
            href="https://www.goevo.vn/ve-evo"
            onClick={handleToggle}
          >
            Về chúng tôi
          </a>
        </li>
        <li className="py-4 border-t border-gray-500">
          <a
            className="text-black hover:text-black focus:text-black"
            href="https://www.goevo.vn/dieu-kien-su-dung"
            onClick={handleToggle}
          >
            Điều kiện sử dụng dịch vụ
          </a>
        </li>
        <li className="py-4 border-t border-gray-500">
          <a
            className="text-black hover:text-black focus:text-black"
            href="https://www.goevo.vn/hoi-dap"
            onClick={handleToggle}
          >
            Câu hỏi thường gặp
          </a>
        </li>
        <li className="py-4 border-t border-gray-500">
          <a
            className="text-black hover:text-black focus:text-black"
            href="https://www.goevo.vn/ve-evo#lien-he"
            onClick={handleToggle}
          >
            Liên hệ với chúng tôi
          </a>
        </li>
      </ul>
    </>
  );
};

export default HambergerMenu;

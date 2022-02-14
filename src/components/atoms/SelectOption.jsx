import React from 'react'

const SelectOption = () => {
  return (
    <div className="dropdown relative">
    <button
      className="
        dropdown-toggle
        flex px-8 py-3 mr-8 bg-grey-100 text-grey-800 font-medium text-sm leading-snug uppercase rounded-default shadow-md hover:bg-grey-200 hover:shadow-lg focus:bg-grey-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-grey-300 active:shadow-lg transition duration-150 ease-in-out
        items-center
        whitespace-nowrap
      "
      type="button"
      id="dropdownMenuLargeButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Large button
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="caret-down"
        className="w-2 ml-2"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    </button>
    <ul
      className="
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
      "
      aria-labelledby="dropdownMenuLargeButton"
    >
      <li>
        <a
          className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
          href="#"
          >Action</a
        >
      </li>
      <li>
        <a
          className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
          href="#"
          >Another action</a
        >
      </li>
      <li>
        <a
          className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
          href="#"
          >Something else here</a
        >
      </li>
    </ul>
  </div>

  )
}

export default SelectOption
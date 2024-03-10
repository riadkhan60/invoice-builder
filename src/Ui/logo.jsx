

function Logo({ companyName }) {
  return (
    <div className=" mt-5 flex items-center justify-center">
      <ul className="menu menu-horizontal px-8 py-3 uppercase font-bold text-blue-400 gap-2 rounded-box bg-base-200">
        <li>
          {companyName}
        </li>
      </ul>
    </div>
  );
}

export default Logo;

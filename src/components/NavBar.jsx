import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-slate-900">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/">
          <h3 className="font-bold text-3xl">Next Crud</h3>
        </Link>
        <ul className="flex justify-between items-center gap-x-4 text-lg font-bold">
          <li className="text-slate-300 hover:text-slate-200">
            <Link href="/">Task</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href="/new">New</Link>
          </li>
          <li className="text-slate-300 hover:text-slate-200">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

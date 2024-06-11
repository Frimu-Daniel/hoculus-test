export default function Header() {
    return (
        <header className="bg-red-100">
            <div className="w-full max-w-[1200px] mx-auto p-5 flex justify-between items-center">
              <h4>MyBlog</h4>

              <nav>
                  <ul className="flex gap-5">
                      <li>Home</li>
                      <li>About</li>
                      <li>Services</li>
                  </ul>
              </nav>
            </div>
        </header>
    );
}

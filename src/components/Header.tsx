export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 border-b border-gray-200 mb-8 max-w-7xl mx-auto px-4">
      <img src="/logo.svg" alt="Beyond UI Logo" className="h-8" />
      <nav className="space-x-6 text-sm">
        <a href="/">Homepage</a>
        <a href="#">About us</a>
        <a href="#">Features</a>
        <a href="#">Blog</a>
        <a href="#">Contact us</a>
        <button className="px-3 py-1 rounded-lg bg-gray-100">Demo</button>
        <button className="px-3 py-1 rounded-lg bg-black text-white">Get Started</button>
      </nav>
    </header>
  );
}

const Header = () => {
  return (
    <div className="container flex h-[60px] shrink-0 items-center justify-center px-4 lg:h-[80px] lg:px-0">
      <a href="/" className="flex items-center gap-2.5">
        <span className="text-2xl font-bold">
          <span className="text-blue-600">CareerHive</span>{" "}
          <span className="text-gray-800">Tutor</span>
        </span>
      </a>
    </div>
  );
};

export default Header;

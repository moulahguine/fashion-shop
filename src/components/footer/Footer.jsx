const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white my-10">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <a
            href="/"
            className="text-2xl font-serif font-light text-gray-900 hover:text-gray-700 transition-colors duration-200"
          >
            FashionShop
          </a>
        </div>
        <p className="mx-auto text-xs px-3 mt-4 max-w-md text-center pb-9 font-light leading-relaxed text-gray-500">
          Fashion is a state of mind, where creativity knows no bounds. Choose
          your own style, and let it reflect the uniqueness within you
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-3 font-light">
        <p className="text-center text-xs leading-relaxed text-gray-500">
          &copy; FashionShop {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

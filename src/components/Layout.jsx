import Profile from "/profile.png";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <main className="flex flex-col md:flex-row h-full">
        {/* Sidebar / Profile Image */}
        <aside className="w-full md:w-[40%] h-[60vh] sm:h-[70vh] md:h-screen shrink-0">
          <img
            src={Profile}
            alt="Profile picture"
            className="w-full h-full object-cover object-top"
          />
        </aside>

        {/* Main Content */}
        <section className="w-full md:w-[60%] bg-content min-h-[40vh] md:h-screen overflow-y-auto">
          <div className="px-4 sm:px-6 md:px-10 py-10 md:py-16 space-y-6">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Layout;

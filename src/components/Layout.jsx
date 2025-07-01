import Profile from "/profile.png";

function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-black text-white bg-content overflow-x-hidden">
      <main className="flex flex-col lg:flex-row h-full min-h-screen">
        {/* Sidebar / Profile Image */}
        <aside className="w-full lg:w-[40%] lg:h-screen shrink-0">
          {/* Small screen circular image */}
          <div className="lg:hidden flex justify-center pt-6 pb-4 sm:py-6">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden">
              <img
                src={Profile}
                alt="Profile picture"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Large screen full-height image */}
          <div className="hidden lg:block h-full w-full">
            <img
              src={Profile}
              alt="Profile picture"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full lg:w-[60%] bg-content min-h-[40vh] lg:h-screen overflow-y-auto flex-grow">
          <div className="px-4 sm:p-6 lg:p-10 sm:p-8 lg:p-16 space-y-6">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Layout;

import Profile from "/profile.png";

function Layout({ children }) {
  return (
    <div className="relative h-screen">
      <main className="flex h-full">
        <aside className="w-[40%] h-full">
          <img
            src={Profile}
            alt="Profile picture"
            className="w-full h-full object-cover"
          />
        </aside>

        <section className="w-[60%] bg-content overflow-y-auto">
          <div className="mt-20">{children}</div>
        </section>
      </main>
    </div>
  );
}

export default Layout;

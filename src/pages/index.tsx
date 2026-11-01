import NavbarComponent from "@/components/Navbar";
import ProfileComponent from "@/components/Profile";

export default function Home() {
  return (<>
    <header>
      <NavbarComponent />
    </header>
    <section>
      <ProfileComponent />
    </section>
  </>)
}

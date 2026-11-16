import { ContentSectionComponent } from "@/components/Content";
import FooterComponent from "@/components/Footer";
import NavbarComponent from "@/components/Navbar";
import ProfileComponent from "@/components/Profile";

export default function Home() {
  return (<>
    <header>
      <NavbarComponent />
    </header>
    <div id="col" className="max-sm:px-0 px-26.5 max-sm:grid-cols-1 grid grid-cols-2">
      <aside id="sidebar">
        <ProfileComponent />
      </aside>
      <main id="content" className="py-10">
        <ContentSectionComponent />
      </main>
    </div>
    <FooterComponent />
  </>)
}

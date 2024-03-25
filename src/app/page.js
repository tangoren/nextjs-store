import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <Navbar />

      <div style={{ height: 5000 }}>{/* temporary space for scrolling */}</div>
    </div>
  );
}

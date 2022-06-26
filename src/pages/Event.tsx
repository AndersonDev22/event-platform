import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Header />
      <main className="flex flex-1 p-5">
        {slug
          ? <Video lessonSlug={slug} />
          : <div className="flex-1"></div>
        }
        <Sidebar/>
      </main>
      <Footer />
    </div>
  )
}
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1655321300721-5debfd81176b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50",
      name: "Kim Doe",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 john.design/doctorcare"},
    ] as { type: 'paragraph' | 'link', content: string }[],
    publishedAt: new Date('2022-06-16 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1655439923051-16033f4ff2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50",
      name: "Sam Doe",
      role: "Artist"
    },
    content: [
      { type: "paragraph", content: "Suspendisse at ornare metus. Praesent in nibh elit. Nunc ante mi, viverra ac luctus accumsan, ultrices ut diam. Donec molestie pretium ipsum. Praesent congue volutpat neque, sit amet euismod nibh viverra vitae.", },
      { type: "paragraph", content: "Donec dictum dui ac fringilla vehicula. Vestibulum interdum lobortis tortor, eget blandit arcu aliquet dignissim. Mauris eleifend nibh ac scelerisque condimentum. Mauris orci mi, efficitur nec eros sed, mattis ullamcorper est. Vivamus ut eros nunc. Curabitur laoreet nisl risus, et egestas sapien malesuada sit amet." },
      { type: "link", content: "👉 Lorem ipsum"},
    ] as { type: 'paragraph' | 'link', content: string }[],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App;

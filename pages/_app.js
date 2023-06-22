import NavBar from "@/componets/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>공용으로쓸것</span>
      <style jsx global>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}

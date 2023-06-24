import Layout from "@/componets/Layout";
import '../styles/globals.css' 

// 우리가 home으로 가려면 next.js는 Home컴포넌트를 받아와서 Component로 render하고
// index.js의 밑에 getServerSideProps부분에서 API호출하고 props를 return하게 된다.
// 그리고 props를 pageProps에 넣게된다.
// 이 결과로 Home컴포넌트의 {{result}} props을 받을 수 있게된다.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

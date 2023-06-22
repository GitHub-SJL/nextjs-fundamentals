import Layout from "@/componets/Layout";

// 현재 Compoent는 Layout의 Children으로 들어가게됨 
// _app.js에 너무 많은내용을 담지 않도록 분리하는 작업이라고 생각하기
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

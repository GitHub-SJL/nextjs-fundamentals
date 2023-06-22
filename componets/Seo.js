import Head from "next/head";

// Head 컴포넌트로 분리해서 prop을 이용해 커스터마이징 가능하다.
export default function Seo({ title }) {
  return <Head>
    <title>{title} | Next Moives</title>
  </Head>;
}

import { useRouter } from "next/router";

export default function All() {
  const router = useRouter();
  console.log(router);
  return <div>{router.query.title||'...loading'}</div>
}

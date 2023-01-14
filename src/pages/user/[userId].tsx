import type { NextPage } from "next";
import { useRouter } from "next/router";

const User: NextPage = () => {
    const router = useRouter()
    const {userId} = router.query
  return (
    <>
        <h1>User</h1>
        <h2>{userId}</h2>
    </>
  )
}

export default User;

import Header from "@/components/header";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  // if (typeof window !== 'undefined') {
  //   // Code that runs only on the client side
  //   const router = useRouter();
  //   console.log("I'm on the client!");
  // } else {
  //   // Code that runs on the server or during static generation
  //   console.log("I'm not on the client.");
  // }


  // const { data } = useSession({
  //   required: true,
  //   // onUnauthenticated() {
  //   //   router.push('/api/auth/signin');
  //   // },
  // });

  // const user = data?.user;

  return (
    <>
      <Header />
     sdsdsds
    </>
  );
}

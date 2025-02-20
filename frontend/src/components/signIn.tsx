import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("cas");
      }}
    >
      <button type="submit">Signin with CAS</button>
    </form>
  );
}

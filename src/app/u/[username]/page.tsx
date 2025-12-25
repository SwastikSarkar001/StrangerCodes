import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@daveyplate/better-auth-ui";
import Link from "next/link";

export default async function UserPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  return (
    <div>
      <nav>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button type="button" aria-label="Sign In">
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
      </nav>
      <main>
        <h1>User Profile: {username}</h1>
      </main>
    </div>
  )
}
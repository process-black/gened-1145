"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function ClerkDemoPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-4 py-10 md:px-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Clerk authentication examples
        </h1>
        <p className="text-sm text-muted-foreground">
          This area shows how to gate routes with Clerk without touching the
          rest of the template. Forkers can delete this folder if they prefer a
          different auth stack.
        </p>
      </section>

      <SignedOut>
        <div className="rounded-3xl border border-dashed border-muted bg-muted/20 p-6 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Not signed in yet</p>
          <p className="mt-2">
            Use the header buttons or the quick action below to launch the Clerk
            modal with Harvard email domain restrictions (configure in the
            dashboard).
          </p>
          <SignInButton mode="modal">
            <Button className="mt-4">Open sign-in</Button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <SignedInContent />
      </SignedIn>

      <section className="rounded-3xl border border-border bg-card p-6 text-sm text-muted-foreground">
        <h2 className="text-base font-semibold text-foreground">
          Next steps for devs
        </h2>
        <ul className="mt-3 space-y-2">
          <li>
            Wire this section into actual tools by protecting `/tools/**` in{" "}
            <code>middleware.ts</code>.
          </li>
          <li>
            Call Clerk&apos;s <code>auth()</code> helper inside API routes, then
            tie `userId` to storage layers (Airtable, Supabase, etc.).
          </li>
          <li>
            Remove `/auth/clerk` if your fork uses a different auth provider.
          </li>
        </ul>
      </section>
    </div>
  );
}

function SignedInContent() {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Signed in
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-foreground">
          Welcome back, {user?.firstName ?? user?.username ?? "friend"}!
        </h2>
        <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <div>
            <span className="font-medium text-foreground">Clerk user id</span>
            <p className="mt-1 break-all">{user?.id}</p>
          </div>
          <div>
            <span className="font-medium text-foreground">Primary email</span>
            <p className="mt-1 break-all">
              {user?.primaryEmailAddress?.emailAddress ?? "—"}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-muted bg-muted/20 p-6 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Build your own flows</p>
        <p className="mt-2">
          Use <code>auth()</code> in route handlers to persist recordings, or
          embed <code>SignedIn</code>/<code>SignedOut</code> directly in client
          components like the recorder page.
        </p>
        <Link
          href="/tools/recorder"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Jump to recorder demo →
        </Link>
      </div>
    </div>
  );
}

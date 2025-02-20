"use server";

import { auth } from "@/auth";
import { Session } from "next-auth";

export interface SessionWithAccessToken extends Session {
  accessToken?: string;
}

export async function secureEndpointAction() {
  const session: SessionWithAccessToken | null = await auth();

  const authHeader = { Authorization: `Bearer ${session?.accessToken}` };

  const response = await fetch("http://localhost:8000/secure-endpoint", {
    headers: authHeader,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

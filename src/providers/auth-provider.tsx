import { Session } from "@supabase/supabase-js";
import { PropsWithChildren, useState } from "react";


export default function AuthProvider({ children }: PropsWithChildren) {

    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState(null);
    // const []

}
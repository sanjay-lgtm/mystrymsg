"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/router";
import { signUpSchema } from "@/schemas/signUpSchema";
import axios, { AxiosError } from "axios";
const page = () => {
  const [username, setUsername] = useState("");
  const [usernameMessage, setUsernameMessgae] = useState("");
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const debouncedUsername = useDebounceValue(username, 300);
  const { toast } = useToast();
  const router = useRouter();

  //zod implementaion
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const checkUsernameUnique = async () => {
      if (debouncedUsername) {
        setIsCheckingUsername(true);
        setUsernameMessgae("");
        try {
          //stop here
          await axios.get(`/api/`)
        } catch (error) {}
      }
    };
  }, [debouncedUsername]);
  return <div>page</div>;
};

export default page;

"use client"

import Link from "next/link";
import Ring from "../../components/backgorundRing";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Define the form schema for login
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

export default function Login() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      // Send the login details as JSON in the request body
      const resp = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",  // Use POST for sending data to the server
        headers: {
          "Content-Type": "application/json",  // Indicate that the body is JSON
        },
        body: JSON.stringify(values),  // Convert the values object to a JSON string
      });

      // Check if the response status is OK (status 200)
      if (resp.ok) {
        router.push("/home")
      } else {
        // Handle failed login (e.g., show an error message)
        const errorData = await resp.json();
        alert("Login failed")
        console.log(errorData)
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during login:", error);
    };
  }

  return (
    <div>
      <Ring />
      <div className="absolute mt-20">
        <div className="w-[35vw] ml-[4vw] mt-[6vh] flex flex-col gap-[1vh] text-black text-center font-montserrat text-[2.5vw] font-semibold leading-[-3%]">
          Welcome Back
          <span className="text-black font-dm-sans text-[18.333px] font-light leading-normal">Log in to see what your competitors are up to</span>
        </div>

        <div className="mt-[3vh] w-[30vw] ml-[6vw] flex justify-around items-center">
          {/* Wrap the form components inside FormProvider */}
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="pt-[4vh] pb-[4vh] w-[30vw] flex flex-col gap-[1.5vh] items-center rounded-[28.333px] bg-white shadow-[0px_4.167px_13.333px_rgba(8,15,52,0.12)]"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <label>Email Address</label>
                    <FormControl>
                      <Input placeholder="✉️ Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <label>Password</label>
                    <FormControl>
                      <Input placeholder="🔒 Enter your password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-[22vw] h-[7vh]">
                Login
              </Button>
            </form>
          </FormProvider>
        </div>
        <div className="pl-48 text-black font-dm-sans text-[16.743px] font-normal leading-normal flex w-[40vw]  mt-4">
          <p>New to Platform?</p>
          <Link href="/signup" className="underline text-blue-800">Sign Up</Link>
        </div>
      </div>

    </div>
  );
}


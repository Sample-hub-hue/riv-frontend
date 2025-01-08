"use client"

import Link from "next/link";
import Ring from "../../components/backgorundRing";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompanyDetails from "@/app/components/companydetails";
import UserDetails from "../../components/userdetail";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the form schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters long."),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

export default function Signup() {

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(0);  // Step 1: CompanyDetails, Step 2: UserDetails

  const handleFormSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try{
      const resp = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Indicate that the body is JSON
        },
        body: JSON.stringify(values),  // Convert the values object to a JSON string
      })

      if( resp.ok ){
        console.log("ok")
      } else {
        const errorData = await resp.json();
        alert("Login failed")
        console.log(errorData)
      }
    } catch(error) {
      console.error("Error:",error)
    }
    setCurrentStep(1);
  };

  const goToUserDetails = () => {
    setCurrentStep(2); // Transition to UserDetails
  };

  return (
    <div>
      <Ring />
      <div className="absolute mt-20">
        <div className="w-[35vw] ml-[4vw] mt-[6vh] flex flex-col gap-[1vh] text-black text-center font-montserrat text-[2.5vw] font-semibold leading-[-3%]">
          Create your account
          <span className="text-black font-dm-sans text-[18.333px] font-light leading-normal">Let's get you started real quick</span>
        </div>

        <div className="mt-[3vh] w-[30vw] ml-[6vw] flex justify-around items-center">
          {/* Wrap the form components inside FormProvider */}
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
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
              
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <label>Confirm Password</label>
                    <FormControl>
                      <Input placeholder="🔒 Re-Enter your password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <input type="checkbox" {...field} />
                      <FormLabel className="ml-2">
                        By creating an account, I agree with Your{" "}
                        <Link href="#" className="text-blue-600">Terms and conditions</Link>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-[22vw] h-[7vh]">
                Sign Up
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>

      {/* Conditional rendering for the modals */}
      {currentStep === 1 && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-40" />
          <CompanyDetails onComplete={goToUserDetails} />
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-40" />
          <UserDetails />
        </>
      )}
    </div>
  );
}


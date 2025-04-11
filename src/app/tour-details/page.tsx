"use client";
import { ArrowRight, CalendarIcon } from "lucide-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Please enter a valid email",
    })
    .email(),
  phoneNumber: z.string(),
  service: z.string({
    required_error: "Please select a service you'd like.",
  }),
  schedule: z.date({
    required_error: "A schedule date is required.",
  }),
});

const Page = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      service: "",
      schedule: date
    },
  });

  const { isSubmitting } = form.formState

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <main className="bg-green-50 w-full">
      <section className="container mx-auto px-4 py-6 md:py-10 z-50 md:mt-20 ">
        {/* Top row boxes */}
        <div className="flex flex-col md:flex-row gap-6 w-full z-30">
          <div className="group/box1 cursor-default relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 transition-all duration-500 ease-in-out md:basis-3/5 hover:md:basis-3/4 h-64 peer">
            <div className="absolute inset-0 bg-black opacity-0 group-hover/box1:opacity-40 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                Featured
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Half Day Tour
              </h3>
              <p className="text-white/80 mt-2 max-w-xs">
                Half Day Tours: From N15,000
              </p>
              <button
                onClick={() => {
                  setIsFormOpen((prev) => !prev);
                }}
                className="cursor-pointer mt-4 inline-flex items-center text-white hover:underline"
              >
                Plan <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="group/box2 cursor-default relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 transition-all duration-500 ease-in-out md:basis-2/5 hover:md:basis-3/4  h-64 peer">
            <div className="absolute inset-0 bg-black opacity-0 group-hover/box2:opacity-40 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                Popular
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                One Day Tour
              </h3>
              <p className="text-white/80 mt-2 max-w-xs">
                One Day Tours: From N25,000
              </p>
              <button
                onClick={() => {
                  setIsFormOpen((prev) => !prev);
                }}
                className="cursor-pointer mt-4 inline-flex items-center text-white hover:underline"
              >
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Text section between rows */}
        <div className="my-12 text-center">
          <h1 className="text-green-900 text-4xl md:text-5xl font-bold tracking-wider mb-4">
            Tour Details
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Kindly note that all destinations have their entrance fees, and all
            the destinations are secured and suitable for tourists to visit.
          </p>
          <p className="text-base md:text-lg mt-3 text-muted-foreground max-w-2xl mx-auto">
            A tour guide is available every day but you have to book ahead so
            that a tour guide will be assigned to you. A package will be created
            for you or your group based on the chosen packages curated just for
            you based on the services we offer
          </p>
        </div>

        {/* Bottom row boxes */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="group/box3 cursor-default relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 transition-all duration-500 ease-in-out md:basis-2/5 hover:md:basis-3/4 h-64 peer">
            <div className="absolute inset-0 bg-black opacity-0 group-hover/box3:opacity-40 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                New
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Weekend Tour
              </h3>
              <p className="text-white/80 mt-2 max-w-xs">
                Weekend Tours: From N70,000
              </p>
              <button
                onClick={() => {
                  setIsFormOpen((prev) => !prev);
                }}
                className="cursor-pointer mt-4 inline-flex items-center text-white hover:underline"
              >
                Book <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="group/box4 cursor-default relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 transition-all duration-500 ease-in-out md:basis-3/5 hover:md:basis-3/4 h-64 peer">
            <div className="absolute inset-0 bg-black opacity-0 group-hover/box4:opacity-40 transition-opacity duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                Trending
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Weekend Getaway
              </h3>
              <p className="text-white/80 mt-2 max-w-xs">
                Weekend Getaways: From N150,000
              </p>
              <button
                onClick={() => {
                  setIsFormOpen((prev) => !prev);
                }}
                className="cursor-pointer mt-4 inline-flex items-center text-white hover:underline"
              >
                Visit <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Also Available Section */}
      <section className="container px-4 mx-auto pb-10 md:pb-28">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-2">
          Also Available
        </h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hotel Pickup */}
          <div
            onClick={() => {
              setIsFormOpen((prev) => !prev);
            }}
            className="group cursor-default bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-1 bg-emerald-50 h-full">
              <div className="bg-white p-4 rounded-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-emerald-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hotel Pickup and Drop Off
                </h3>
                <p className="text-gray-600">
                  Convenient door-to-door service from any hotel in the area.
                  Our drivers will meet you at the lobby.
                </p>
              </div>
            </div>
          </div>

          {/* Airport Pickup */}
          <div
            onClick={() => {
              setIsFormOpen((prev) => !prev);
            }}
            className="group cursor-default bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-1 bg-blue-50 h-full">
              <div className="bg-white p-4 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Airport Pickup & Drop Off
                </h3>
                <p className="text-gray-600">
                  Meet and greet service at arrivals. We track your flight and
                  adjust for any delays.
                </p>
              </div>
            </div>
          </div>

          {/* Train Station Pickup */}
          <div
            onClick={() => {
              setIsFormOpen((prev) => !prev);
            }}
            className="group cursor-default bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-1 bg-amber-50 h-full">
              <div className="bg-white p-4 rounded-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Train Station Pickup & Drop Off
                </h3>
                <p className="text-gray-600">
                  Reliable service from all major train stations. We&apos;ll be
                  waiting when your train arrives.
                </p>
              </div>
            </div>
          </div>

          {/* Bus Terminals Pickup */}
          <div
            onClick={() => {
              setIsFormOpen((prev) => !prev);
            }}
            className="group cursor-default bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-1 bg-purple-50">
              <div className="bg-white p-4 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bus Terminals Pickup & Drop Off
                </h3>
                <p className="text-gray-600">
                  Seamless transfers from all bus terminals. We ensure you never
                  miss your connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogContent className="sm:max-w-md bg-white border border-gray-100 z-50">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 py-7"
            >
              <h1 className="text-center text-green-900 text-2xl font-semibold">
                Book a Tour
              </h1>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fullname</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phonenumber</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tour</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your preferred tour plan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-gray-100 z-99">
                        <SelectItem
                          className="hover:bg-white"
                          value="halfdaytour"
                        >
                          Half Day Tour
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-white"
                          value="onedaytour"
                        >
                          One Day Tour
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-white"
                          value="weekendtour"
                        >
                          Weekend Tour
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-white"
                          value="weekendgetaway"
                        >
                          Weekend Getaway
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-white"
                          value="hotelpickup"
                        >
                          Hotel Pickup and Drop Off
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-white"
                          value="airportpickup"
                        >
                          Airport Pickup & Drop Off
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-white"
                          value="trainpickup"
                        >
                          Train Station Pickup & Drop Off
                        </SelectItem>
                        <SelectItem
                          className="hover:bg-white"
                          value="buspickup"
                        >
                          Bus Terminals Pickup & Drop Off
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="schedule"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Schedule</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon />
                            {date ? (
                              format(date, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        align="start"
                        className="flex w-auto flex-col space-y-2 p-2 bg-gray-50"
                      >
                        <Select
                          onValueChange={(value) => {
                            const newDate = addDays(new Date(), parseInt(value));
                            setDate(newDate);
                            field.onChange(newDate);
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent
                            className="w-full bg-white"
                            position="popper"
                          >
                            <SelectItem className="hover:bg-gray-200" value="0">
                              Today
                            </SelectItem>
                            <SelectItem className="hover:bg-gray-200" value="1">
                              Tomorrow
                            </SelectItem>
                            <SelectItem className="hover:bg-gray-200" value="3">
                              In 3 days
                            </SelectItem>
                            <SelectItem className="hover:bg-gray-200" value="7">
                              In a week
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="rounded-md border">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(selectedDate) => {
                              setDate(selectedDate);
                              field.onChange(selectedDate);
                            }}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-[#7AC142] hover:bg-[#7AC14299] text-white"
                type="submit"
              >
                {isSubmitting ? "Submitting" : "Submit"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Page;

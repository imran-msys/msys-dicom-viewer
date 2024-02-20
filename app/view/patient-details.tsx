'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux"
import { useEffect } from "react";
import { selectedPatient } from "@/redux/slice/patientSlice";


const PatientDetails = () => {
  const selectedPatient = useSelector((state) => (state as any).patient.patientDetails);
  console.log(selectedPatient);


  useEffect(() => {
    if (selectedPatient) return;
    console.log("It has patient");
  }, [selectedPatient])
  return (
    <section className="h-full mb-8 flex flex-col items-center">
      <h2 className="text-foreground text-4xl font-semibold mb-4 text-center">
        Patient Details
      </h2>

      <Card className="h-full w-1/2">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <CardTitle>Alice Smith</CardTitle>
              <CardDescription>987-654-32-1</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex gap-2">
              <p className="text-muted-foreground">Date of Birth: </p>
              <p>Mon, 01 Jan 1900</p>
            </div>

            <div className="flex gap-2">
              <p className="text-muted-foreground">Gender: </p>
              <p>Male</p>
            </div>

            <div className="flex gap-2">
              <p className="text-muted-foreground">DCM Files: </p>
              <p>10</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>View DCM Images</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

export default PatientDetails;
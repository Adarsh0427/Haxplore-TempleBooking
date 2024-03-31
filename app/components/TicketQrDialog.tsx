import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { default as ButtonNative } from "./Button";
import Image from "next/image";

export function TicketQrDialog({
  onSubmit,
  disabled,
  qrCode,
}: {
  onSubmit: () => void,
  disabled?: boolean,
  qrCode: string,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Share</Button> */}
        <ButtonNative
          label="Reserve"
          disabled={disabled}
          onClick={() => {
            // console.log("HERE");
            // onSubmit();
          }}
        />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Ticket</DialogTitle>
          <DialogDescription>
            Save your ticket QR Code
          </DialogDescription>
        </DialogHeader>

        <Image
            src={qrCode}
            alt="Ticket QR Code"
            width={400}
            height={400}
        />
        
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
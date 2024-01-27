import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react'

export function FeedbackComponent() {
  return (
    <Card className="w-full mx-auto rounded-none">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your Phone No." />
          </div>
          <TextInput id="password1" type="text" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Notify me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
}


import React from "react"
import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

type ContactFormValues = {
  name: string
  company?: string
  purpose: string
  email: string
  telegram?: string
}

export default function ContactForm({ onSubmit }: { onSubmit: (data: ContactFormValues) => void }) {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      company: "",
      purpose: "",
      email: "",
      telegram: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: "Vui lòng nhập tên của bạn" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên của bạn</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nhập tên của bạn" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên công ty (nếu có)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nhập tên công ty" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purpose"
          rules={{ required: "Vui lòng nhập mục đích liên hệ" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mục đích liên hệ</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Nhập mục đích liên hệ" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: "Vui lòng nhập email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email không hợp lệ",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nhập email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telegram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telegram (nếu có)</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Nhập telegram" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-red-500 text-white hover:bg-red-600">
          Gửi
        </Button>
      </form>
    </Form>
  )
}
import React from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "./ui/dialog"
import ContactForm from "./ContactForm"
import emailjs from "@emailjs/browser"

export default function ContactModal({ trigger }: { trigger: React.ReactNode }) {
const handleSubmit = (data: any) => {
  emailjs.send(
    "service_orvvk2b",
    "template_p9y1q2x",
    {
      name: data.name,
      company: data.company,
      purpose: data.purpose,
      email: data.email,
      telegram: data.telegram,
      time: new Date().toLocaleString(),
    },
    "16SnEX9r554mWaHuC"
  )
  .then((result) => {
    alert("Thông tin đã được gửi thành công!");
    console.log("EmailJS result:", result);
  })
  .catch((error) => {
    alert("Gửi thông tin thất bại. Vui lòng thử lại!");
    console.error("EmailJS error:", error); // Dòng này sẽ hiện log lỗi chi tiết ở tab Console
  });
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Liên hệ/Kết nối với chúng tôi</DialogTitle>
        </DialogHeader>
        <ContactForm onSubmit={handleSubmit} />
        <DialogClose asChild>
          <button style={{marginTop: 16}}>Đóng</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
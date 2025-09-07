import React, { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "./ui/dialog"
import ContactForm from "./contactform"
import emailjs from "@emailjs/browser"

export default function ContactModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [resultDialog, setResultDialog] = useState<{ success: boolean; open: boolean }>({ success: false, open: false })

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
      .then(() => {
        setOpen(false) // Đóng form contact
        setResultDialog({ success: true, open: true }) // Hiện popup thành công
      })
      .catch(() => {
        setOpen(false)
        setResultDialog({ success: false, open: true }) // Hiện popup thất bại
      })
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Liên hệ/Kết nối với chúng tôi</DialogTitle>
          </DialogHeader>
          <ContactForm onSubmit={handleSubmit} />
          <DialogClose asChild>
            <button style={{ marginTop: 16 }}>Đóng</button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <Dialog open={resultDialog.open} onOpenChange={open => setResultDialog(r => ({ ...r, open }))}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {resultDialog.success ? " Gửi thông tin thành công!" : " Gửi thông tin thất bại!"}
            </DialogTitle>
          </DialogHeader>
          <div className="py-2 text-base">
            {resultDialog.success
              ? "Đã gửi thông tin thành công. Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất. Cảm ơn bạn!"
              : "Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại!"}
          </div>
          <DialogClose asChild>
            <button className="mt-4 px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
              Đóng
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
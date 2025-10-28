import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import ContactForm from "./contactform";
import emailjs from "@emailjs/browser";
import { useTranslation } from "@/contexts/LanguageContext";

type ContactModalProps = {
  trigger: React.ReactNode;
};

const SERVICE_ID = "service_orvvk2b";
const TEMPLATE_ID = "template_p9y1q2x";
const PUBLIC_KEY = "16SnEX9r554mWaHuC";

const ContactModal = ({ trigger }: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [resultDialog, setResultDialog] = useState<{
    success: boolean;
    open: boolean;
  }>({ success: false, open: false });
  const translation = useTranslation();
  const { contactModal } = translation;

  const handleSubmit = (data: Record<string, string>) => {
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          company: data.company,
          purpose: data.purpose,
          email: data.email,
          telegram: data.telegram,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY,
      )
      .then(() => {
        setOpen(false);
        setResultDialog({ success: true, open: true });
      })
      .catch(() => {
        setOpen(false);
        setResultDialog({ success: false, open: true });
      });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{contactModal.title}</DialogTitle>
          </DialogHeader>
          <ContactForm onSubmit={handleSubmit} />
          <DialogClose asChild>
            <button className="mt-4 rounded bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-muted/80">
              {contactModal.close}
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
      <Dialog
        open={resultDialog.open}
        onOpenChange={(isOpen) =>
          setResultDialog((current) => ({ ...current, open: isOpen }))
        }
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {resultDialog.success
                ? contactModal.successTitle
                : contactModal.errorTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="py-2 text-base">
            {resultDialog.success
              ? contactModal.successMessage
              : contactModal.errorMessage}
          </div>
          <DialogClose asChild>
            <button className="mt-4 rounded bg-red-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-600">
              {contactModal.close}
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactModal;

import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useTranslation } from "@/contexts/LanguageContext";

type ContactFormValues = {
  name: string;
  company?: string;
  purpose: string;
  email: string;
  telegram?: string;
};

type ContactFormProps = {
  onSubmit: (data: ContactFormValues) => void;
};

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const translation = useTranslation();
  const {
    contactForm: { fields, submit },
  } = translation;

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      company: "",
      purpose: "",
      email: "",
      telegram: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          rules={{ required: fields.name.required }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{fields.name.label}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={fields.name.placeholder} />
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
              <FormLabel>{fields.company.label}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={fields.company.placeholder} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purpose"
          rules={{ required: fields.purpose.required }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{fields.purpose.label}</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder={fields.purpose.placeholder} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          rules={{
            required: fields.email.required,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: fields.email.pattern,
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{fields.email.label}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={fields.email.placeholder} />
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
              <FormLabel>{fields.telegram.label}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={fields.telegram.placeholder} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-red-500 text-white transition-colors duration-300 hover:bg-red-600"
        >
          {submit}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

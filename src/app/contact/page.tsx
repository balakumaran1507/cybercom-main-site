"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/UI";
import { SectionLabel, SectionHeading } from "@/components/SectionTypography";
import { Mail, Linkedin, Instagram, Disc as Discord, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  organisation: z.string().min(2, "Organisation name is required"),
  eventType: z.enum(["College CTF", "Corporate CTF", "Attack-Defence", "Custom", "Not Sure"]),
  participants: z.enum(["<100", "100–300", "300–700", "700+"]),
  eventDate: z.string().min(1, "Preferred date is required"),
  message: z.string().min(10, "Please provide more details (min 10 chars)"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <main className="pt-32 flex flex-col">
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column: Form */}
          <div className="order-2 lg:order-1">
            <SectionLabel>{"// INITIATE CONTACT"}</SectionLabel>
            <SectionHeading className="mb-6">Let&apos;s Plan Your Event.</SectionHeading>
            <p className="text-[18px] text-[#8a8f98] mb-12">
              Fill in the details and our team will get back to you within 24 hours.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit(onSubmit)} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0d0e0f] border border-[#222324] rounded-2xl p-8 md:p-10"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Full Name</label>
                    <input 
                      {...register("fullName")}
                      className={cn(
                        "bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4f4f5]/50 transition-colors",
                        errors.fullName && "border-red-500/50"
                      )} 
                      placeholder="John Doe" 
                    />
                    {errors.fullName && <span className="text-red-500 text-[12px]">{errors.fullName.message}</span>}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Organisation Name</label>
                    <input 
                      {...register("organisation")}
                      className={cn(
                        "bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4f4f5]/50 transition-colors",
                        errors.organisation && "border-red-500/50"
                      )} 
                      placeholder="University of Cyber" 
                    />
                    {errors.organisation && <span className="text-red-500 text-[12px]">{errors.organisation.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Event Type</label>
                    <select 
                      {...register("eventType")}
                      className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4f4f5]/50 transition-colors appearance-none"
                    >
                      <option value="College CTF">College CTF</option>
                      <option value="Corporate CTF">Corporate CTF</option>
                      <option value="Attack-Defence">Attack-Defence</option>
                      <option value="Custom">Custom</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Expected Participants</label>
                    <select 
                      {...register("participants")}
                      className="bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4f4f5]/50 transition-colors appearance-none"
                    >
                      <option value="<100">&lt;100</option>
                      <option value="100–300">100–300</option>
                      <option value="300–700">300–700</option>
                      <option value="700+">700+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Preferred Event Date</label>
                    <input 
                      type="date" 
                      {...register("eventDate")}
                      className={cn(
                        "bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4f4f5]/50 transition-colors",
                        errors.eventDate && "border-red-500/50"
                      )} 
                    />
                    {errors.eventDate && <span className="text-red-500 text-[12px]">{errors.eventDate.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[13px] text-[#8a8f98] font-medium uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={4} 
                      {...register("message")}
                      className={cn(
                        "bg-[#08090a] border border-[#222324] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f4f4f5]/50 transition-colors resize-none",
                        errors.message && "border-red-500/50"
                      )} 
                      placeholder="Tell us about your event requirements..." 
                    />
                    {errors.message && <span className="text-red-500 text-[12px]">{errors.message.message}</span>}
                  </div>

                  <div className="md:col-span-2 mt-2">
                    <Button 
                      type="submit" 
                      className="w-full py-4 text-[16px] gap-2"
                      onClick={() => {}} // dummy for Button component
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Request"} <span className="text-[20px] leading-none">→</span>
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0d0e0f] border border-green-500/20 rounded-2xl p-12 text-center flex flex-col items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2">Request Received</h3>
                    <p className="text-[#8a8f98] leading-relaxed">
                      Thank you for reaching out! Our team has received your request and will get back to you within 24 hours to discuss your event.
                    </p>
                  </div>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">Send another message</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Info */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Direct Contact</h4>
                <div className="space-y-4">
                  <a href="mailto:hello@cybercom.hosting" className="flex items-center gap-4 text-white hover:text-[#8a8f98] transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-[#0d0e0f] border border-[#222324] flex items-center justify-center group-hover:bg-[#161718]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-[13px] text-[#8a8f98] block">Email Us</span>
                      <span className="text-[16px] font-medium">hello@cybercom.hosting</span>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Socials</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin size={20} />, label: "LinkedIn" },
                    { icon: <Instagram size={20} />, label: "Instagram" },
                    { icon: <Discord size={20} />, label: "Discord" },
                  ].map((social) => (
                    <a 
                      key={social.label}
                      href="#" 
                      className="w-12 h-12 rounded-xl bg-[#0d0e0f] border border-[#222324] flex items-center justify-center text-white hover:bg-[#161718] transition-colors"
                      aria-label={`CyberCom on ${social.label}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#161718] border border-[#222324]">
                <p className="text-[#8a8f98] leading-relaxed italic">
                  &quot;We typically respond within 24 hours on business days. For urgent event support, please use the dedicated Slack channel provided in your Pro/Enterprise welcome kit.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

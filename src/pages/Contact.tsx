// Example: src/components/Contact.tsx or src/pages/contact.tsx
import React, { useState, FormEvent } from "react";
// Apne components ke sahi paths daalein
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // Apne Button component ka sahi path

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry", // Default subject
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  }>({
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    console.log("[FRONTEND] Submitting form data:", formData);

    try {
      const response = await fetch("/api/send-email", {
        // Relative path to Next.js API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("[FRONTEND] Response Status:", response.status);
      const responseText = await response.text(); // Get response as text first
      console.log("[FRONTEND] Response Text:", responseText);

      if (!response.ok) {
        let errorMessage = `HTTP error! Status: ${response.status}.`;
        try {
          // Attempt to parse as JSON to get a more specific error message from API
          const errorJson = JSON.parse(responseText);
          if (errorJson && errorJson.message) {
            errorMessage = `Error: ${errorJson.message} (Status: ${response.status})`;
          } else {
            errorMessage = `HTTP error! Status: ${response.status}. Response: ${responseText.substring(0, 100)}`; // Show part of the text
          }
        } catch (e) {
          // If not JSON, use the text response as part of the error message
          errorMessage = `HTTP error! Status: ${response.status}. Response: ${responseText.substring(0, 100)}`;
        }
        throw new Error(errorMessage);
      }

      const result = JSON.parse(responseText); // Now parse as JSON
      console.log("[FRONTEND] Parsed Result:", result);

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: result.message || "Message sent successfully!",
        });
        setFormData({
          // Reset form on success
          firstName: "",
          lastName: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message:
            result.message || "API returned success:false. Please try again.",
        });
      }
    } catch (error: any) {
      console.error("[FRONTEND] Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: error.message || "An unexpected client-side error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // Baaki ka JSX (form structure) aapke original code se copy kar sakte hain.
  // Neeche ek basic structure diya gaya hai.
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <TopBar />
      <Navbar />
      <section className="relative bg-gradient-to-r from-blue-900 via-green-700 to-green-600 text-white py-24 overflow-hidden">
        {/* ... Hero section (aapke original code se) ... */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team for inquiries, partnerships, or support
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 mb-16 md:mb-20">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">
                  Send us a Message
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 text-sm font-semibold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                    required
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Information">
                      Product Information
                    </option>
                    <option value="Partnership Opportunity">
                      Partnership Opportunity
                    </option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 text-white py-3.5 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {submitStatus.message && (
                  <p
                    className={`mt-4 text-sm text-center ${submitStatus.success ? "text-green-600" : "text-red-600"}`}
                  >
                    {submitStatus.message}
                  </p>
                )}
              </form>
            </div>
            {/* ... Contact Details (Right Column - aapke original code se) ... */}
            <div className="pt-0 md:pt-2">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent mb-8">
                Get in Touch
              </h2>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content:
                      "406, C- Wing Ajanta Gardens,\nMittal Enclave, Vasai East\nThane Maharashtra - 401208",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "from-blue-50 to-blue-100",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "Madridpharmaceautical@gmail.com",
                    color: "from-purple-500 to-purple-600",
                    bgColor: "from-purple-50 to-purple-100",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content:
                      "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
                    color: "from-orange-500 to-red-500",
                    bgColor: "from-orange-50 to-red-100",
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className={`relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${contact.bgColor} border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    {" "}
                    <div className="flex items-start">
                      {" "}
                      <div
                        className={`bg-gradient-to-r ${contact.color} rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mr-4 sm:mr-6 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md`}
                      >
                        {" "}
                        <contact.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1.5 sm:mb-2">
                          {" "}
                          {contact.title}{" "}
                        </h3>{" "}
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {" "}
                          {contact.content}{" "}
                        </p>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ... Map Section (aapke original code se) ... */}
          <div className="mt-16 md:mt-20">
            {" "}
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-10">
              {" "}
              Find Us{" "}
            </h3>{" "}
            <div className="bg-white rounded-2xl h-80 md:h-96 flex items-center justify-center shadow-xl border border-gray-200 p-6">
              {" "}
              <div className="text-center">
                {" "}
                <MapPin className="w-14 h-14 sm:w-16 sm:h-16 text-blue-500 mx-auto mb-4" />{" "}
                <p className="text-gray-700 font-semibold text-lg sm:text-xl">
                  {" "}
                  Interactive Map Integration Coming Soon{" "}
                </p>{" "}
                <p className="text-gray-500 text-sm mt-1">
                  {" "}
                  Our precise location will be displayed here.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;

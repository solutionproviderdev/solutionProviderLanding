
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { Toast } from "@/components/ui/toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validate = () => {
    let validationErrors = {};
    if (!formData.name || formData.name.length < 2) {
      validationErrors.name = "Name must be at least 2 characters.";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // console.log(formData);
      Toast({
        title: "Success",
        description: "Your details have been submitted successfully.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      // console.log('data-->',formData)
    } catch (error) {
      // console.error("Submission error:", error);
      Toast({
        variant: "destructive",
        title: "Error",
        description: "There was an issue submitting your details. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full my-4 max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Submit Your Project Details</CardTitle>
        <CardDescription>Fill out the form below to get started with your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="pl-10"
                aria-label="Full Name"
              />
            </div>
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="pl-10"
                aria-label="Email"
              />
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="pl-10"
                aria-label="Phone Number"
              />
            </div>
            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Details (Optional)</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-500" size={18} />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter any additional project details"
                className="pl-10 min-h-[100px]"
                aria-label="Message"
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-gradient-to-r from-sky-500 to-sky-700 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-500" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Project Details"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;

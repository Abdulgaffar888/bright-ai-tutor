import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  ArrowLeft,
  Eye,
  EyeOff,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { supabase } from "../lib/supabase";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const isResetMode = searchParams.get("reset") === "true";

  const [isSignUp, setIsSignUp] = useState(
    searchParams.get("signup") === "true"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [newPassword, setNewPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  useEffect(() => {
    setIsSignUp(searchParams.get("signup") === "true");
  }, [searchParams]);

  // 🔹 GOOGLE SIGN IN
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) toast.error(error.message);
  };

  // 🔹 FORGOT PASSWORD
  const handleForgotPassword = async () => {
    if (!formData.email) {
      toast.error("Please enter your email first");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(
      formData.email,
      {
        redirectTo: `${window.location.origin}/auth?reset=true`,
      }
    );

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Password reset link sent to your email");
  };

  // 🔹 UPDATE PASSWORD (RESET FLOW)
  const handleUpdatePassword = async () => {
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Password updated successfully");
    navigate("/dashboard");
  };

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    await supabase.from("profiles").insert({
      id: data.user?.id,
      full_name: formData.name,
      mobile: formData.mobile,
    });

    toast.success("Check your email to verify your account.");
    setIsSignUp(false);
  };

  const handleSignin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        await handleSignup();
      } else {
        await handleSignin();
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12">
        <div className="max-w-md mx-auto w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Edurance</span>
            </Link>

            {isResetMode ? (
              <>
                <h1 className="text-3xl font-bold mb-6">
                  Set new password
                </h1>

                <div className="space-y-4">
                  <Label>New Password</Label>
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />

                  <Button
                    onClick={handleUpdatePassword}
                    variant="hero"
                    className="w-full"
                  >
                    Update Password
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-2">
                  {isSignUp ? "Create your account" : "Welcome back"}
                </h1>

                <p className="text-muted-foreground mb-8">
                  {isSignUp
                    ? "Start your free trial with 3 lessons"
                    : "Sign in to continue learning"}
                </p>

                <button
                  onClick={signInWithGoogle}
                  className="w-full mb-4 flex items-center justify-center gap-2 border rounded-xl py-2 hover:bg-muted"
                >
                  <img src="/google.svg" className="w-5 h-5" />
                  Continue with Google
                </button>

                <div className="text-center text-sm text-muted-foreground mb-4">
                  or
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {isSignUp && (
                    <>
                      <Input
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                      <Input
                        placeholder="Mobile number"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        required
                      />
                    </>
                  )}

                  <Input
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />

                  <Input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />

                  {!isSignUp && (
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isSignUp ? "Create Account" : "Sign In"}
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

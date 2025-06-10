"use client";

import { RefreshCw, AlertTriangle, Home, Headphones } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ErrorPage({ error, onRetry }: any) {
  const router = useRouter();
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      router.refresh();
    }
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 blur-3xl animate-pulse"></div>

        {/* Main error card */}
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Icon with animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-red-500/10 p-4 rounded-full border border-red-500/20">
                <AlertTriangle className="w-8 h-8 text-red-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Error heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Headphones className="w-6 h-6 text-indigo-400" />
              Oops! Something went wrong
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              We couldn't load your podcast right now. Don't worry, this happens
              sometimes.
            </p>
          </div>

          {/* Error details */}
          <div className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4 mb-6">
            <p className="text-red-300 text-sm font-mono break-words">
              {error || "Unknown error occurred"}
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={handleRetry}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/25"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>

            <button
              onClick={handleGoHome}
              className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border border-slate-600/50 hover:border-slate-500/50"
            >
              <Home className="w-4 h-4" />
              Go Home
            </button>
          </div>

          {/* Help text */}
          <div className="mt-6 pt-6 border-t border-slate-700/30">
            <p className="text-slate-500 text-xs text-center">
              Still having trouble? Try refreshing the page or check your
              internet connection.
            </p>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400/20 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-red-400/20 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
}

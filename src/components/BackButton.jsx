'use client'

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      className="group flex items-center space-x-2 text-[#035527] hover:text-[#035527] transition-colors"
      onClick={() => router.back()}
    >
      <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
      <span>Back</span>
    </Button>
  );
}
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push("/"); 
  }, [router]); 
   
  return (
    <>
    </>
  );
}
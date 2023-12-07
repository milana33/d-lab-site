'use client'

import ClientHomeComponent from "@/ClientHomeComponent.client";
import { ParallaxProvider } from 'react-scroll-parallax';


export default function Home() {
  return (
      <>
        <ParallaxProvider>
        <ClientHomeComponent />
        </ParallaxProvider>
      </>
  )
}

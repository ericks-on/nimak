// app/types/types.ts

import { ElementType } from 'react';

export interface ServiceData {
  id: string
  title: string
  subtitle: string
  description: string
  // Use a string here as per the previous fix
  icon: string 
  heroImage: string
  processSteps: Array<{
    title: string
    description: string
    icon: string
  }>
  cta: {
    title: string
    description: string
    buttonText: string
  }
  seoTitle: string
  seoDescription: string
}
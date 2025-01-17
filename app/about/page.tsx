'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <h1 className="text-4xl font-bold mb-8">About Text to SVG Converter</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Text to SVG Converter is a powerful tool designed to transform your text into beautiful, scalable vector graphics. 
            Whether you&apos;re a designer, developer, or creative professional, our tool helps you create stunning text effects 
            that can be used across various platforms and mediums.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Us?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time preview of your SVG text</li>
            <li>Advanced styling options including gradients and shadows</li>
            <li>Export to multiple formats (SVG, PNG, JPEG)</li>
            <li>History tracking for your recent designs</li>
            <li>User-friendly interface</li>
            <li>No account required - start creating immediately</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Built with modern web technologies including React, Next.js, TypeScript, and Tailwind CSS, 
            ensuring a fast, responsive, and reliable experience.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

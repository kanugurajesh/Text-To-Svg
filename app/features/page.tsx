'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <h1 className="text-4xl font-bold mb-8">Features</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Text Styling</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Multiple font families</li>
              <li>Custom font sizes</li>
              <li>Font weight and style controls</li>
              <li>Text decoration options</li>
              <li>Letter spacing adjustment</li>
              <li>Text rotation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color & Effects</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Custom text colors</li>
              <li>Background color options</li>
              <li>Gradient text effects</li>
              <li>Opacity control</li>
              <li>Text stroke customization</li>
              <li>Shadow effects</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Export Options</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>SVG format export</li>
              <li>PNG export with transparency</li>
              <li>JPEG export with background</li>
              <li>High-resolution output</li>
              <li>Custom file naming</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time preview</li>
              <li>Design history tracking</li>
              <li>Responsive interface</li>
              <li>Undo/Redo support</li>
              <li>Local storage backup</li>
              <li>Keyboard shortcuts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

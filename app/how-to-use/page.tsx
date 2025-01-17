'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function HowToUsePage() {
  return (
    <div className="container mx-auto py-8 space-y-6">
      <h1 className="text-4xl font-bold mb-8">How to Use</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Enter Your Text</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Navigate to the main converter page</li>
              <li>Find the text input field at the top</li>
              <li>Type or paste your desired text</li>
              <li>The preview will update automatically</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step 2: Style Your Text</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Use the Basic Controls tab to adjust:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Font family and size</li>
                  <li>Text color</li>
                  <li>Background settings</li>
                </ul>
              </li>
              <li>Switch to Style Controls for advanced options:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Gradient effects</li>
                  <li>Shadow properties</li>
                  <li>Text stroke</li>
                  <li>Rotation and spacing</li>
                </ul>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Step 3: Export Your Design</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Choose your preferred export format:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>SVG - Best for web and scalable graphics</li>
                  <li>PNG - Good for transparency needs</li>
                  <li>JPEG - Best for photos or solid backgrounds</li>
                </ul>
              </li>
              <li>Click the Export button</li>
              <li>Save the file to your computer</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tips & Tricks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the history panel to track your recent designs</li>
              <li>Experiment with different combinations of effects</li>
              <li>Preview your design at different sizes before exporting</li>
              <li>Use keyboard shortcuts for common actions</li>
              <li>Save your favorite designs for future reference</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

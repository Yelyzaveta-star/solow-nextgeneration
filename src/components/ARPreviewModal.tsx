import { useState } from 'react';
import { X, Play, RotateCcw, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import costumesImg from '@/assets/category-costumes.jpg';
import decorationsImg from '@/assets/category-decorations.jpg';

interface ARPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
}

export default function ARPreviewModal({ isOpen, onClose, productName, productImage }: ARPreviewModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <Card className="relative z-10 w-full max-w-3xl bg-background rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">AR Preview</h3>
            <p className="text-sm text-muted-foreground">{productName}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* AR View */}
        <div className="relative aspect-video bg-muted">
          <img
            src={productImage}
            alt={productName}
            className="w-full h-full object-contain"
          />
          
          {/* AR Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying ? (
              <Button
                variant="hero"
                size="xl"
                onClick={() => setIsPlaying(true)}
                className="shadow-glow"
              >
                <Play className="h-6 w-6 mr-2" />
                Start AR Experience
              </Button>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 backdrop-blur-sm">
                <div className="text-center text-background">
                  <Move className="h-12 w-12 mx-auto mb-4 animate-bounce-slow" />
                  <p className="font-display text-lg">Move your camera to place the item</p>
                  <p className="text-sm opacity-80 mt-2">Point at a flat surface</p>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          {isPlaying && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <Button variant="glass" size="sm" onClick={() => setIsPlaying(false)}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button variant="default" size="sm">
                Take Photo
              </Button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 bg-secondary/50">
          <p className="text-sm text-muted-foreground text-center">
            Use AR to see how this product looks in your space before purchasing.
            Works best in well-lit environments.
          </p>
        </div>
      </Card>
    </div>
  );
}

// Component to trigger AR preview
export function ARPreviewButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="accent" onClick={() => setIsOpen(true)}>
        <Play className="h-4 w-4 mr-2" />
        Try AR Preview
      </Button>
      <ARPreviewModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        productName="LED Balloon Set"
        productImage={decorationsImg}
      />
    </>
  );
}

import { useState } from 'react';
import { X, Play, RotateCcw, Move, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface ARVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ARVideoModal({ isOpen, onClose }: ARVideoModalProps) {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showARMode, setShowARMode] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/80 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <Card className="relative z-10 w-full max-w-4xl bg-background rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">{t('ar.title')}</h3>
            <p className="text-sm text-muted-foreground">{t('ar.description')}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Video/AR View */}
        <div className="relative aspect-video bg-foreground">
          {/* Embedded YouTube Video */}
          {!showARMode ? (
            <div className="absolute inset-0">
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1&mute=0"
                  title="SoLow AR/VR Product Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-foreground to-accent/20">
                  <div className="text-center text-background mb-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <h4 className="font-display text-2xl font-bold mb-2">AR/VR Demo Video</h4>
                    <p className="text-background/70">See how our products look in your space</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="hero"
                      size="xl"
                      onClick={() => setIsPlaying(true)}
                      className="shadow-glow"
                    >
                      <Play className="h-6 w-6 mr-2" />
                      {t('ar.watchVideo')}
                    </Button>
                    <Button
                      variant="glass"
                      size="xl"
                      onClick={() => setShowARMode(true)}
                      className="text-background border-background/30"
                    >
                      <Move className="h-5 w-5 mr-2" />
                      {t('ar.startExperience')}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 via-foreground to-primary/20">
              <div className="text-center text-background">
                <Move className="h-16 w-16 mx-auto mb-6 animate-bounce-slow" />
                <h4 className="font-display text-2xl font-bold mb-2">AR Mode Active</h4>
                <p className="text-background/70 mb-4">Point your camera at a flat surface</p>
                <p className="text-sm text-background/50 mb-8">
                  For the best experience, use a mobile device with AR capabilities
                </p>
                <Button
                  variant="glass"
                  onClick={() => setShowARMode(false)}
                  className="text-background border-background/30"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Back to Video
                </Button>
              </div>
            </div>
          )}

          {/* Video Controls - shown when video is playing */}
          {isPlaying && !showARMode && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setIsPlaying(false)}
                    className="text-background"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Restart
                  </Button>
                  <Button
                    variant="glass"
                    size="icon"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-background"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
                <Button
                  variant="glass"
                  size="icon"
                  className="text-background"
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="p-6 bg-secondary/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h5 className="font-display font-semibold text-foreground">Watch Demo</h5>
              <p className="text-sm text-muted-foreground">See products in action</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center">
                <Move className="h-6 w-6 text-accent" />
              </div>
              <h5 className="font-display font-semibold text-foreground">AR Preview</h5>
              <p className="text-sm text-muted-foreground">Place in your space</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-festive/10 flex items-center justify-center">
                <Maximize2 className="h-6 w-6 text-festive-foreground" />
              </div>
              <h5 className="font-display font-semibold text-foreground">360° View</h5>
              <p className="text-sm text-muted-foreground">Explore every angle</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

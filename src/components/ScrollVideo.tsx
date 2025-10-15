"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface ScrollVideoProps {
  videoSrc: string;
  className?: string;
  containerClassName?: string;
  stickyClassName?: string;
}

export const ScrollVideo = ({
  videoSrc,
  className = "",
  containerClassName,
  stickyClassName,
}: ScrollVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hadError, setHadError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    setIsVideoLoaded(false);
    setHadError(false);

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.load();

    if (video.readyState >= 2) {
      setIsVideoLoaded(true);
    }
  }, [videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const handleScroll = () => {
      if (!video || !isVideoLoaded) return;

      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the container
      // When container top is at windowHeight, progress = 0
      // When container top is at -containerHeight, progress = 1
      const scrollStart = windowHeight;
      const scrollEnd = -containerHeight;
      const scrollDistance = scrollStart - scrollEnd;
      const currentScroll = containerTop - scrollEnd;
      const scrollProgress = Math.max(0, Math.min(1, 1 - currentScroll / scrollDistance));

      // Set video time based on scroll progress
      if (video.duration) {
        video.currentTime = scrollProgress * video.duration;
      }
    };

    // Initial check
    handleScroll();
    if (video.readyState >= 2) {
      setIsVideoLoaded(true);
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVideoLoaded]);

  return (
    <div ref={containerRef} className={cn("relative h-[300vh]", containerClassName)}>
      <div
        className={cn("sticky top-0 h-screen flex items-center justify-center overflow-hidden", stickyClassName)}
      >
        <video
          ref={videoRef}
          className={`w-full h-full object-cover ${className}`}
          preload="auto"
          muted
          playsInline
          onLoadedMetadata={() => setIsVideoLoaded(true)}
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          onError={() => setHadError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <div className="text-center">
              {!hadError ? (
                <>
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
                  <p className="text-muted-foreground">Loading video...</p>
                </>
              ) : (
                <p className="text-muted-foreground">Unable to load video.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

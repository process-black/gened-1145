"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, 
  FileAudio,
  Mic,
  Square,
  UploadCloud,
  Waves,
} from "lucide-react";

const formatTimer = (seconds: number) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

type RecordingPreview = {
  id: string;
  transcript: string;
};

export default function RecorderPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedSeconds] = useState(0);
  const [recentRecording] = useState<RecordingPreview | null>(null);

  const toggleRecording = () => {
    setIsRecording((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background px-4 py-10 text-foreground">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8">
        <header className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase text-muted-foreground">
            Recorder
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Capture quick voice notes
          </h1>
          <p className="text-sm text-muted-foreground">
            Tap to start a new recording. We will keep your audio and run an
            automatic GPT-4o transcription right after you stop.
          </p>
        </header>

        <section
          aria-label="Recorder controls"
          className="flex flex-col gap-6 rounded-3xl border border-border bg-card px-6 py-8 shadow-sm"
        >
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <Waves className="mr-1 h-3 w-3" />
              {isRecording ? "Recording…" : "Ready to record"}
            </span>
            <p className="min-h-[3.5rem] text-sm text-muted-foreground">
              {isRecording
                ? "Speak naturally. We will stop listening when you tap the square."
                : "Find a quiet spot and tap the button to begin."}
            </p>
            <p className="text-4xl font-semibold tracking-tight tabular-nums">
              {formatTimer(elapsedSeconds)}
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant={isRecording ? "destructive" : "default"}
              className="h-16 w-16 rounded-full p-0 text-base shadow-lg transition-transform active:scale-95"
              onClick={toggleRecording}
              aria-pressed={isRecording}
            >
              {isRecording ? (
                <Square className="h-8 w-8" aria-hidden="true" />
              ) : (
                <Mic className="h-8 w-8" aria-hidden="true" />
              )}
              <span className="sr-only">
                {isRecording ? "Stop recording" : "Start recording"}
              </span>
            </Button>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 font-medium text-foreground">
              <UploadCloud className="h-4 w-4" />
              Automatic upload & transcription
            </div>
            <p>
              Once you stop, we stash the audio and fetch the transcript in the
              background. You&apos;ll see it appear below when it&apos;s ready.
            </p>
          </div>
        </section>

        <section
          aria-label="Recent transcript preview"
          className="flex flex-col gap-3 rounded-3xl border border-dashed border-muted bg-muted/20 px-5 py-6"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <FileAudio className="h-4 w-4" />
            Latest note
          </div>
          {recentRecording ? (
            <div className="flex flex-col gap-4">
              <Link
                href={`/tools/recorder/history/${recentRecording.id}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Open recording
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <p className="text-sm leading-relaxed text-foreground">
                {recentRecording.transcript}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground">
                Your transcripts will show up here after you finish recording.
              </p>
              <div className="space-y-2">
                <SkeletonLine />
                <SkeletonLine className="w-4/5" />
              </div>
            </div>
          )}

          <Link
            href="/tools/recorder/history"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            View all recordings
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      </div>
    </div>
  );
}

const SkeletonLine = ({ className = "" }: { className?: string }) => (
  <span
    className={`inline-block h-2 rounded-full bg-muted ${className}`}
    aria-hidden="true"
  />
);

"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function WhatsAppTracking() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;

      const link = target?.closest<HTMLAnchorElement>(
        'a[href*="wa.me"], a[href*="api.whatsapp.com"]',
      );

      if (!link) {
        return;
      }

      sendGAEvent("event", "whatsapp_click", {
        link_url: link.href,
        link_text: link.textContent?.trim() || "WhatsApp",
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

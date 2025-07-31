// src/hooks/useCopyToClipboard.js
import { useState } from 'react';

export function useCopyToClipboard() {
    const [isCopied, setIsCopied] = useState(false);
    const copy = async (text) => {
        if (!navigator?.clipboard) { return false; }
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
            return true;
        } catch (error) {
            setIsCopied(false);
            return false;
        }
    };
    return [isCopied, copy];
}
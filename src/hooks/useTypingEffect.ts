import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useTypingEffect(text: string, speed: number = 50) {
    const [displayedText, setDisplayedText] = useState('');
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (!inView) return;

        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [inView, text, speed]);

    return { ref, displayedText };
}

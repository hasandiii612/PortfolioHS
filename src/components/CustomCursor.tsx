import React, { useState, useEffect } from 'react';
import '../components/CustomCursor.css'; // We'll create this CSS file next

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const mouseDownHandler = () => {
            setClicked(true);
        };

        const mouseUpHandler = () => {
            setClicked(false);
        };

        const mouseLinkHoverHandler = () => {
            setLinkHovered(true);
        };

        const mouseLinkLeaveHandler = () => {
            setLinkHovered(false);
        };

        // Get all clickable elements
        const clickables = document.querySelectorAll('a, button, input, textarea, [role="button"]');

        clickables.forEach(el => {
            el.addEventListener('mouseenter', mouseLinkHoverHandler);
            el.addEventListener('mouseleave', mouseLinkLeaveHandler);
        });

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mousedown', mouseDownHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mousedown', mouseDownHandler);
            document.removeEventListener('mouseup', mouseUpHandler);

            clickables.forEach(el => {
                el.removeEventListener('mouseenter', mouseLinkHoverHandler);
                el.removeEventListener('mouseleave', mouseLinkLeaveHandler);
            });
        };
    }, []);

    return (
        <>
            <div
                className={`cursor-ring ${clicked ? 'cursor-ring--clicked' : ''} ${linkHovered ? 'cursor-ring--hover' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`cursor-dot ${clicked ? 'cursor-dot--clicked' : ''} ${linkHovered ? 'cursor-dot--hover' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
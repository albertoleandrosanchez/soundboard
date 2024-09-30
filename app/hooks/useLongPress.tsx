import { useCallback, useRef, useState } from "react";

const useLongPress = (
  onLongPress: (event: Event) => void = () => {},
  onClick: () => void = () => {},
  { shouldPreventDefault = true, delay = 300 } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const target = useRef<EventTarget | null>(null);

  const start = useCallback(
    (event: Event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener("touchend", preventDefault, {
          passive: false,
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (event: Event, shouldTriggerClick = true) => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      if (shouldTriggerClick && !longPressTriggered) {
        onClick();
      }
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onMouseDown: (e: Event) => start(e),
    onTouchStart: (e: Event) => start(e),
    onMouseUp: (e: Event) => clear(e),
    onMouseLeave: (e: Event) => clear(e, false),
    onTouchEnd: (e: Event) => clear(e),
  };
};

const isTouchEvent = (event: Event) => {
  return "touches" in event;
};

const preventDefault = (event: Event) => {
  if (!isTouchEvent(event)) return;

  const touchEvent = event as TouchEvent;
  if (touchEvent.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongPress;

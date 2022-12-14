import type { StoryObj, Meta } from "@storybook/react";
import { Button, Toast, ToastProps } from "@vander-ignite-ui/react";
import { useEffect, useRef, useState } from "react";

const DemoToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false);

  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  });

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => setOpen(true), 100);
        }}
      >
        Agendar
      </Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  );
};

export default {
  title: "Surfaces/Toast",
  component: DemoToast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};

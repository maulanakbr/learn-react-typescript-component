type HorizontalPosition = "left" | "center" | "right";

type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast: React.FC<ToastProps> = ({ position }: ToastProps) => {
  return (
    <div className="flex justify-center">
      Toast Notification Position - {position}
    </div>
  );
};

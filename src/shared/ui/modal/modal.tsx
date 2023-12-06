import { ReactNode } from "react"
import cls from "./modal.module.css"
import { Dialog } from "@headlessui/react"

interface ModalProps {
  children: ReactNode
  buttonName?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Modal({ children, buttonName, isOpen, setIsOpen }: ModalProps) {
  return (
    <>
      <button onClick={() => setIsOpen(true)}>{buttonName}</button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={cls.Modal}
      >
        <Dialog.Panel className={cls.content}>{children}</Dialog.Panel>
      </Dialog>
    </>
  )
}

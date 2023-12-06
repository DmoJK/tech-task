import { ReleasesResult } from "../../model/types/Release"
import { Modal } from "../../../../shared/ui/modal/modal"
import { EditableRelease } from "../../../../widgets/EditableRelease"
import { useCallback, useState } from "react"
import cls from "../styles/Releases.module.css"

interface ReleasesItemProps {
  item: ReleasesResult
}

export const ReleasesItem = ({ item }: ReleasesItemProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const handleClose = useCallback(() => {
    setIsDeleteModalOpen(false)
    setIsEditModalOpen(false)
  }, [])

  return (
    <li className={cls.item}>
      <h1>{item.name}</h1>
      <img src={item.ava_link} alt="" />
      <div className={cls.btns}>
        <Modal
          buttonName="edit"
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
        >
          <EditableRelease action="edit" uid={item.uid} img={item.ava_link} />
        </Modal>
        <Modal
          buttonName="delete"
          isOpen={isDeleteModalOpen}
          setIsOpen={setIsDeleteModalOpen}
        >
          <EditableRelease
            action="delete"
            uid={item.uid}
            handleClose={handleClose}
          />
        </Modal>
      </div>
    </li>
  )
}

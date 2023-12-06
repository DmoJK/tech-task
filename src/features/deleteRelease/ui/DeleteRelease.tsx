import { useCallback } from "react"
import { useDeleteRelease } from "../api/deleteReleaseApi"

interface DeleteReleaseProps {
  uid: string
  handleClose?: () => void
}

export const DeleteRelease = ({ uid, handleClose }: DeleteReleaseProps) => {
  const [deleteRelease, { isSuccess, isError }] = useDeleteRelease()

  const onDelete = useCallback(() => {
    deleteRelease(uid)
  }, [deleteRelease, uid])

  const onClose = useCallback(() => {
    if (handleClose) {
      handleClose()
    }
  }, [handleClose])

  return (
    <div>
      <h2>Are you sure to delete?</h2>
      <button onClick={onDelete}>Yes</button>
      <button onClick={onClose}>No</button>
      {isSuccess && <div>Success deleted</div>}
      {isError && <div>Deleted isn't success, try later</div>}
    </div>
  )
}

import { AddNewRelease } from "../../../features/addNewRelease"
import { DeleteRelease } from "../../../features/deleteRelease"
import { EditRelease } from "../../../features/editRelease"

interface EditableReleaseProps {
  action: releaseActions
  uid?: string
  img?: string
  handleClose?: () => void
}

export const EditableRelease = ({
  action,
  uid,
  img,
  handleClose,
}: EditableReleaseProps) => {
  switch (action) {
    case "add":
      return <AddNewRelease />
    case "edit":
      if (uid) {
        return <EditRelease uid={uid} img={img} />
      }
      return null
    case "delete":
      if (uid) {
        return <DeleteRelease uid={uid} handleClose={handleClose} />
      }
      return null

    default:
      return null
  }
}

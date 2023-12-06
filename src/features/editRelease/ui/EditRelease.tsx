import { useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { FileSelector } from "../../../entities/FileSelector"
import {
  getEditReleaseError,
  getEditReleaseIsLoading,
} from "../model/selectors/editReleaseSelectors"
import { editRelease } from "../model/service/editRelease"
import cls from "./EditRelease.module.css"

export interface EditReleaseProps {
  uid: string
  img?: string
}

export const EditRelease = ({ uid, img }: EditReleaseProps) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const error = useAppSelector((state) => getEditReleaseError(state))
  const isLoading = useAppSelector((state) => getEditReleaseIsLoading(state))
  const dispatch = useAppDispatch()

  const editFile = useCallback(
    async (file: File) => {
      if (file) {
        const res = await dispatch(editRelease({ file, uid }))
        if (res.type.split("/")[2] === "fulfilled") {
          setIsSuccess(true)
        }
      }
    },
    [dispatch, uid]
  )

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <div className={cls.main}>
      <div>current image</div>
      <img src={img} alt="" />
      <FileSelector sendFile={editFile} error={error} isSuccess={isSuccess} />
    </div>
  )
}

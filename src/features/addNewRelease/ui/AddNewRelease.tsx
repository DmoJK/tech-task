import { useCallback, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { FileSelector } from "../../../entities/FileSelector"
import { addNewRelease } from "../model/service/addNewRelease"
import {
  getAddReleaseError,
  getAddReleaseIsLoading,
} from "../model/selectors/addNewReleaseSelectors"

export const AddNewRelease = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const error = useAppSelector((state) => getAddReleaseError(state))
  const isLoading = useAppSelector((state) => getAddReleaseIsLoading(state))

  const dispatch = useAppDispatch()

  const sendFile = useCallback(
    async (file: File) => {
      if (file) {
        const res = await dispatch(addNewRelease(file))
        if (res.type.split("/")[2] === "fulfilled") {
          setIsSuccess(true)
        }
      }
    },
    [dispatch]
  )

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <>
      <FileSelector sendFile={sendFile} error={error} isSuccess={isSuccess} />
    </>
  )
}

import React, { useCallback } from "react"

interface FileSelectorProps {
  error?: string
  isSuccess?: boolean
  sendFile: (file: File) => void
}

export const FileSelector = ({
  error,
  sendFile,
  isSuccess,
}: FileSelectorProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        sendFile(e.target.files[0])
      }
    },
    [sendFile]
  )

  return (
    <>
      <input type="file" accept=".png, .jpg" onChange={handleChange} />
      {error && <div>{error}</div>}
      {isSuccess && <div>Successfully loaded</div>}
    </>
  )
}

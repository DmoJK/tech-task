import { useGetList } from "../../api/listApi"
import { ReleasesItem } from "../ReleasesItem/ReleasesItem"
import cls from "../styles/Releases.module.css"

export const ReleasesList = () => {
  const { data, isLoading } = useGetList(null)

  if (isLoading) {
    return <div>Releases list is loading ...</div>
  }

  if (!data) {
    return <div>Bad</div>
  }

  if (data.length === 0) {
    return <div>Releases list is empty</div>
  }

  return (
    <ul className={cls.list}>
      {data.map((el) => (
        <ReleasesItem key={el.uid} item={el} />
      ))}
    </ul>
  )
}

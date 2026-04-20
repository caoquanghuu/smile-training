import { useEffect, useMemo, useState } from 'react'
import type { Exercise } from '../types/training'

type ProgressChecklistProps = {
  moduleId: string
  exercises: Exercise[]
}

type ProgressMap = Record<string, boolean>

function ProgressChecklist({ moduleId, exercises }: ProgressChecklistProps) {
  const storageKey = `smile-training-progress-${moduleId}`
  const [progress, setProgress] = useState<ProgressMap>({})

  useEffect(() => {
    const raw = localStorage.getItem(storageKey)
    if (!raw) {
      return
    }

    try {
      const parsed = JSON.parse(raw) as ProgressMap
      setProgress(parsed)
    } catch {
      setProgress({})
    }
  }, [storageKey])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress))
  }, [progress, storageKey])

  const allChecklistItems = useMemo(
    () => exercises.flatMap((exercise) => exercise.checklist),
    [exercises],
  )

  const completedCount = allChecklistItems.filter((item) => progress[item.id]).length
  const totalCount = allChecklistItems.length
  const score = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  function toggleItem(itemId: string) {
    setProgress((previous) => ({
      ...previous,
      [itemId]: !previous[itemId],
    }))
  }

  return (
    <section className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.08)] sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900">Bai tap va tien do thuc hanh</h2>
          <p className="mt-1 text-stone-700">Danh dau tung thao tac khi hoc vien da thuc hien dung.</p>
        </div>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
          Tien do: {completedCount}/{totalCount} • Diem thao tac: {score}/100
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {exercises.map((exercise) => (
          <article key={exercise.id} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">{exercise.level}</p>
            <h3 className="mt-2 text-xl font-bold text-stone-900">{exercise.title}</h3>
            <p className="mt-2 text-stone-700">Muc tieu: {exercise.objective}</p>

            <ul className="mt-4 space-y-2">
              {exercise.checklist.map((item) => (
                <li key={item.id} className="rounded-lg border border-stone-200 bg-white px-3 py-2">
                  <label className="flex cursor-pointer items-start gap-3 text-stone-700">
                    <input
                      type="checkbox"
                      className="mt-[3px] h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                      checked={Boolean(progress[item.id])}
                      onChange={() => toggleItem(item.id)}
                    />
                    <span>{item.text}</span>
                  </label>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProgressChecklist

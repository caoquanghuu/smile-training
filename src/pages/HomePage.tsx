import { Link } from 'react-router-dom'
import type { TrainingContent } from '../types/training'

type HomePageProps = {
  content: TrainingContent
}

function HomePage({ content }: HomePageProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-8 lg:px-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-amber-200 bg-white/90 p-7 shadow-[0_18px_60px_rgba(180,120,60,0.15)] sm:p-10">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-200/40 blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-orange-200/40 blur-2xl" aria-hidden="true" />

        <p className="inline-flex rounded-full border border-amber-300 bg-amber-100/70 px-3 py-1 text-sm font-semibold tracking-wide text-amber-900">
          Smile PMS Training • Front Office
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-stone-900 sm:text-5xl">{content.meta.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-stone-700">{content.meta.subtitle}</p>

        <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
            <p className="font-bold text-stone-900">Timeline</p>
            <p className="mt-1 text-stone-700">{content.meta.timeline}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
            <p className="font-bold text-stone-900">Hinh thuc</p>
            <p className="mt-1 text-stone-700">Huong dan + thuc hanh theo tinh huong</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3">
            <p className="font-bold text-stone-900">Dau ra</p>
            <p className="mt-1 text-stone-700">Tu van hanh tron ca le tan tren Smile</p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.08)] sm:p-8">
        <h2 className="text-2xl font-extrabold text-stone-900">Danh muc module dao tao</h2>
        <p className="mt-2 text-stone-700">Moi module co huong dan thao tac, mo ta chuc nang va bai tap danh gia rieng.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {content.modules.map((module) => (
            <article key={module.id} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">{module.duration}</p>
              <h3 className="mt-2 text-xl font-bold text-stone-900">{module.name}</h3>
              <p className="mt-3 text-stone-700">{module.summary}</p>
              <Link
                to={`/module/${module.id}`}
                className="mt-5 inline-flex rounded-xl border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:bg-amber-200"
              >
                Mo module
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 rounded-[1.5rem] border border-stone-200 bg-stone-900 p-6 text-stone-100 shadow-[0_12px_34px_rgba(0,0,0,0.18)] md:grid-cols-2 md:p-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Tieu chi danh gia cuoi khoa</h2>
          <ul className="mt-4 space-y-2 text-stone-200">
            {content.evaluation.criteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-stone-700 bg-stone-800 p-5">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-300">Checklist truoc khi len ca chinh thuc</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-stone-200">
            {content.evaluation.preShiftChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}

export default HomePage

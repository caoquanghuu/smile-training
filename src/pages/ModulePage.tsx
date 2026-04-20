import { Link, Navigate, useParams } from 'react-router-dom'
import ProgressChecklist from '../components/ProgressChecklist'
import type { TrainingContent } from '../types/training'

type ModulePageProps = {
  content: TrainingContent
}

function ModulePage({ content }: ModulePageProps) {
  const params = useParams<{ moduleId: string }>()
  const module = content.modules.find((item) => item.id === params.moduleId)

  if (!module) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-8 lg:px-10">
      <section className="rounded-[1.8rem] border border-amber-200 bg-white p-7 shadow-[0_18px_60px_rgba(180,120,60,0.15)] sm:p-10">
        <Link to="/" className="text-sm font-semibold text-amber-800 underline-offset-2 hover:underline">
          Quay lai trang tong
        </Link>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">{module.duration}</p>
        <h1 className="mt-2 text-4xl font-black leading-tight text-stone-900 sm:text-5xl">{module.name}</h1>
        <p className="mt-4 max-w-3xl text-lg text-stone-700">{module.summary}</p>

        <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-700">Nang luc dat duoc</p>
          <ul className="mt-3 space-y-2 text-stone-700">
            {module.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2">
                <span className="mt-[2px] inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.08)] sm:p-8">
        <h2 className="text-2xl font-extrabold text-stone-900">Huong dan su dung theo quy trinh</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {module.guideSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Buoc {index + 1}</p>
              <h3 className="mt-2 text-xl font-bold text-stone-900">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-stone-700">{step.detail}</p>
              <p className="mt-3 rounded-lg border border-amber-200 bg-amber-100/70 p-3 text-sm text-amber-900">Meo thao tac: {step.tips}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.08)] sm:p-8">
        <h2 className="text-2xl font-extrabold text-stone-900">Mo ta chi tiet cac chuc nang</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {module.featureDetails.map((feature) => (
            <article key={feature.name} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <h3 className="text-xl font-bold text-stone-900">{feature.name}</h3>
              <p className="mt-3 leading-relaxed text-stone-700">{feature.description}</p>
              <p className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
                Tinh huong ung dung: {feature.scenario}
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <ProgressChecklist moduleId={module.id} exercises={module.exercises} />
      </div>
    </main>
  )
}

export default ModulePage

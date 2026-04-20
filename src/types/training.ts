export type ChecklistItem = {
  id: string
  text: string
}

export type Exercise = {
  id: string
  level: 'Co ban' | 'Trung cap' | 'Nang cao'
  title: string
  objective: string
  checklist: ChecklistItem[]
}

export type GuideStep = {
  title: string
  detail: string
  tips: string
}

export type FeatureDetail = {
  name: string
  description: string
  scenario: string
}

export type Module = {
  id: string
  name: string
  summary: string
  duration: string
  outcomes: string[]
  guideSteps: GuideStep[]
  featureDetails: FeatureDetail[]
  exercises: Exercise[]
}

export type TrainingContent = {
  meta: {
    title: string
    subtitle: string
    timeline: string
  }
  modules: Module[]
  evaluation: {
    criteria: string[]
    preShiftChecklist: string[]
  }
}

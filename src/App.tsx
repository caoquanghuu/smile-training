import { Navigate, Route, Routes } from 'react-router-dom'
import trainingContentData from './data/trainingContent.json'
import HomePage from './pages/HomePage'
import ModulePage from './pages/ModulePage'
import type { TrainingContent } from './types/training'

const trainingContent = trainingContentData as TrainingContent

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#fff4df_0%,_#fff9ef_42%,_#fffdf8_100%)] text-stone-800">
      <Routes>
        <Route path="/" element={<HomePage content={trainingContent} />} />
        <Route path="/module/:moduleId" element={<ModulePage content={trainingContent} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App

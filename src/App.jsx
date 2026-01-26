import { useState } from "react"

export default function App() {
  const [role, setRole] = useState("")
  const [experience, setExperience] = useState("")
  const [skills, setSkills] = useState("")
  const [companyType, setCompanyType] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!role) return alert("Role is required")

    setLoading(true)
    setResult("")

    // TEMP MOCK (replace with AI later)
    setTimeout(() => {
      setResult(`
Job Description:
We are looking for a ${role} with ${experience} experience.

Skills Required:
${skills}

Interview Questions:
1. Explain your experience as a ${role}
2. How have you used ${skills} in real projects?
      `)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">
          AI Job Description Generator
        </h1>

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Role (e.g. Frontend Developer)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Experience (e.g. 3 years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Skills (React, Node, SQL)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <input
          className="w-full mb-4 p-2 border rounded"
          placeholder="Company Type (Startup / Enterprise)"
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {result && (
          <pre className="mt-4 p-3 bg-gray-100 rounded whitespace-pre-wrap text-sm">
            {result}
          </pre>
        )}
      </div>
    </div>
  )
}

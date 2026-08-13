import {useState, useEffect} from 'react'

export default function Recommendations({excludeId}) {
  const [recs, setRecs] = useState(null)

  useEffect(() => {
    fetch(`/api/recommendations?exclude=${excludeId}`)
      .then(r => r.json())
      .then(data => setRecs(data.recommendations))
      .catch(() => setRecs([]))
  }, [excludeId])

  // This branch is what the SERVER renders (recs is null on the server) —
  // the skeleton. The client shows it too, briefly, until the fetch resolves.
  if (recs === null) {
    return <div className="recs skeleton">Loading recommendations…</div>;
  }

  return (
    <div className="recs">
      <h2>You might also like</h2>
      <ul>
        {recs.map((r) => (
          <li key={r.id}>
            <a href={`/product/${r.id}`}>
              {r.title} — ${(r.price / 100).toFixed(2)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
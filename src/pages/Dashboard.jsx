import React from 'react'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <aside style={{ width: '220px', backgroundColor: '#1e40af', color: 'white', padding: '1rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>LexMind</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Minhas Petições</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Relatórios</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Perfil</a>
        </nav>
      </aside>
      <main style={{ flexGrow: 1, padding: '2rem' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Dashboard</h1>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <select><option>Cliente</option></select>
          <select><option>Tipo</option></select>
          <select><option>Status</option></select>
        </div>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', backgroundColor: 'white' }}>
          <thead style={{ backgroundColor: '#f1f5f9' }}>
            <tr>
              <th>Título</th><th>Tipo</th><th>Cliente</th><th>Status</th><th>Prazo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Petição Inicial</td><td>Cobrança</td><td>Empresa ABC</td><td style={{ color: 'blue' }}>Concluída</td><td>30/04/2024</td></tr>
            <tr><td>Manifestação</td><td>Defesa</td><td>João da Silva</td><td style={{ color: 'gray' }}>Pendente</td><td>25/04/2024</td></tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Git']

function Card() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '760px',
        background: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 20px 45px rgba(15, 23, 42, 0.12)',
        padding: '32px 28px',
        fontFamily: 'Arial, sans-serif',
        color: '#1f2937'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <p style={{ margin: 0, color: '#2563eb', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Резюме
          </p>
          <h1 style={{ margin: '12px 0 8px', fontSize: '2.2rem' }}>Аскар Саят </h1>
          <p style={{ margin: 0, color: '#4b5563', fontSize: '1.05rem' }}>Frontend-разработчик</p>
        </div>

        <div
          style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            color: '#fff',
            fontSize: '2rem',
            fontWeight: 700
          }}
        >
          ИП
        </div>
      </div>

      <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <h2 style={{ margin: '0 0 12px', fontSize: '1.15rem', color: '#111827' }}>О себе</h2>
          <p style={{ margin: 0, lineHeight: 1.7, color: '#374151' }}>
            Опытный frontend-разработчик, создаю удобные и быстрые интерфейсы,
            люблю чистый код и внимательный UX.
          </p>
        </div>

        <div>
          <h2 style={{ margin: '0 0 12px', fontSize: '1.15rem', color: '#111827' }}>Контакты</h2>
          <p style={{ margin: '0 0 8px', color: '#374151' }}>Email: ivan@example.com</p>
          <p style={{ margin: '0 0 8px', color: '#374151' }}>Телефон: +7 (999) 123-45-67</p>
          <p style={{ margin: 0, color: '#374151' }}>Город: Москва</p>
        </div>
      </div>

      <div style={{ marginTop: '28px' }}>
        <h2 style={{ margin: '0 0 12px', fontSize: '1.15rem', color: '#111827' }}>Навыки</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: '8px 14px',
                borderRadius: '999px',
                background: '#e0f2fe',
                color: '#0f172a',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '28px' }}>
        <h2 style={{ margin: '0 0 12px', fontSize: '1.15rem', color: '#111827' }}>Опыт</h2>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8, color: '#374151' }}>
          <li>Разработка пользовательских интерфейсов на React.</li>
          <li>Оптимизация компонентов и улучшение производительности.</li>
          <li>Работа с дизайном, адаптивной версткой и API.</li>
        </ul>
      </div>
    </section>
  )
}

export default Card

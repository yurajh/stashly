:root {
  --bg: #f8f5f1;
  --bg-soft: #fffaf5;
  --panel: #ffffff;
  --panel-alt: #f3ede7;
  --card: #fffdfb;
  --text: #1e1d1b;
  --muted: #5a5856;
  --accent: #f26b48;
  --accent-dark: #d85936;
  --accent-soft: #fff0eb;
  --line: #e7ddd5;
  --success: #1c9f6c;
  --danger: #b85348;
  --shadow: 0 20px 45px rgba(26, 19, 14, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Plus Jakarta Sans", sans-serif;
  background: linear-gradient(135deg, #fffaf5 0%, #f4efe9 100%);
  color: var(--text);
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 20px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0 18px;
}

.brand-block {
  max-width: 640px;
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
}

.eyebrow.dark {
  color: var(--muted);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: clamp(2.2rem, 3vw, 3rem);
  line-height: 1;
}

.tagline {
  margin: 10px 0 0;
  color: var(--muted);
  line-height: 1.6;
  max-width: 52ch;
}

.topbar-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
}

.primary,
.secondary,
.upload-button,
.filter-chip {
  border: none;
  border-radius: 12px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.primary {
  background: var(--accent);
  color: #fff;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 12px 24px rgba(242, 107, 72, 0.2);
}

.primary:hover,
.secondary:hover,
.upload-button:hover,
.filter-chip:hover {
  transform: translateY(-1px);
}

.secondary {
  background: var(--panel-alt);
  color: var(--text);
  padding: 0.8rem 1.1rem;
}

.secondary.danger {
  color: var(--danger);
  background: #fff3f1;
}

.upload-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--panel-alt);
  color: var(--text);
  padding: 0.8rem 1.1rem;
}

.summary-bar {
  margin: 8px 0 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 14px;
}

.stat-card {
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--line);
  box-shadow: 0 10px 20px rgba(31, 24, 19, 0.04);
}

.stat-label {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.stat-card strong {
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: var(--text);
}

.layout {
  display: grid;
  grid-template-columns: minmax(320px, 440px) minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

.panel {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(231, 221, 213, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.form-panel {
  padding: 22px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

#formTitle {
  margin-bottom: 0;
  font-size: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 18px;
}

.field label {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--muted);
}

.field input,
.field textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text);
  padding: 0.8rem 0.9rem;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(242, 107, 72, 0.12);
}

.two-column {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.form-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.content {
  min-width: 0;
}

.toolbar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
}

.search-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 700;
  color: var(--muted);
}

.search-wrap input {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 14px;
  padding: 0.9rem 1rem;
}

.filter-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.filter-chip {
  background: rgba(255, 255, 255, 0.72);
  color: var(--muted);
  border: 1px solid var(--line);
  padding: 0.7rem 1rem;
}

.filter-chip.active {
  background: var(--accent-soft);
  border-color: rgba(242, 107, 72, 0.28);
  color: var(--accent-dark);
}

.recipe-count {
  margin: 0 0 12px;
  color: var(--muted);
  font-weight: 700;
}

.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.recipe-card {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: 0 14px 30px rgba(31, 24, 19, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.recipe-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: linear-gradient(135deg, #f9d8bf, #f5c0a8);
}

.card-body {
  padding: 18px 18px 0;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.recipe-card h3 {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.25;
}

.favorite-btn {
  border: 1px solid var(--line);
  background: var(--panel-alt);
  border-radius: 999px;
  width: 32px;
  height: 32px;
  font-size: 1rem;
}

.favorite-btn.liked {
  background: #ffe5de;
  border-color: #f3b1a0;
}

.recipe-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 14px 0 10px;
}

.meta-pill {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--muted);
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.42rem 0.7rem;
}

.recipe-card p {
  margin-bottom: 0;
  color: var(--muted);
  line-height: 1.65;
  font-size: 0.94rem;
}

.tag-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 14px;
}

.tag {
  display: inline-flex;
  align-items: center;
  background: var(--accent-soft);
  color: var(--accent-dark);
  border-radius: 999px;
  padding: 0.4rem 0.7rem;
  font-size: 0.74rem;
  font-weight: 700;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 18px 18px;
}

.inline-btn {
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  border-radius: 10px;
  padding: 0.55rem 0.8rem;
  font-weight: 700;
}

.inline-btn.delete {
  color: #b65345;
  background: #fff5f2;
  border-color: #f2c9c0;
}

.empty-state {
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.7);
  border: 1px dashed var(--line);
  border-radius: 20px;
  min-height: 260px;
  text-align: center;
  padding: 32px;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 6px;
}

.hidden {
  display: none !important;
}

@media (max-width: 920px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding-inline: 14px;
  }

  .topbar,
  .toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .topbar-actions {
    justify-content: stretch;
  }

  .topbar-actions > * {
    flex: 1;
  }

  .two-column,
  .summary-bar {
    grid-template-columns: 1fr;
  }
}

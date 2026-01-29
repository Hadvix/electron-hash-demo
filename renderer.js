const btn = document.getElementById('btn');
const out = document.getElementById('out');

btn.addEventListener('click', async () => {
  out.textContent = 'Generuju...';

  try {
    const hash = await window.api.generateHash();
    out.textContent = hash;
  } catch (error) {
    console.error(error);
    out.textContent = `Chyba: ${error?.message ?? 'unknown'}`;
  }
});

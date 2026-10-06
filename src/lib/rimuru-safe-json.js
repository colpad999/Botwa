export default async function safeJson(input) {
  if (!input) return null;

  if (typeof input === 'string') {
    const text = input.trim();
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  if (typeof input.json === 'function') {
    try {
      const text = await input.text();
      if (!text || !text.trim()) return null;
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  try {
    return JSON.parse(String(input));
  } catch {
    return null;
  }
}

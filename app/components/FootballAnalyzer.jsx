const analyze = async () => {
  setLoading(true);
  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
  model: "llama-3.3-70b-versatile",
  max_tokens: 1000,
  messages: [
    { role: "system", content: "You are an expert football analyst..." },
    { role: "user", content: prompt }
  ]
});

    const text = data.choices?.[0]?.message?.content || "";
setResult(text);
  } catch (error) {
    console.error("Error analyzing data:", error);
    setError(error);
  } finally {
    setLoading(false);
  }
};

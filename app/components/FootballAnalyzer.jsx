const analyze = async () => {
  setLoading(true);
  try {
    const response = await fetch("/api/analyze", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_API_KEY`
      },
      body: JSON.stringify({ model: 'llama-3.3-70b-versatile', data: yourData })
    });

    const result = await response.json();
    const text = result.output;
    setResult(text);
  } catch (error) {
    console.error("Error analyzing data:", error);
    setError(error);
  } finally {
    setLoading(false);
  }
};

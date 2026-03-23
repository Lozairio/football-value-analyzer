export async function POST(request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "GROQ_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: body.model || "llama-3.3-70b-versatile",
        max_tokens: body.max_tokens || 1000,
        messages: body.messages || [],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.error?.message || "API request failed" },
        { status: response.status }
      );
    }

    return Response.json(data);
  } catch (e) {
    console.error("API Error:", e);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

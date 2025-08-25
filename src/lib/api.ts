const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPosts() {
  const res = await fetch(`${API_URL}/posts`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function fetchPost(id: string) {
  const res = await fetch(`${API_URL}/posts/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

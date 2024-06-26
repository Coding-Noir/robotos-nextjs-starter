// lib/api.ts
export async function getAllPosts() {
  // Fetch all posts data (e.g., from a CMS or a database)
  // This should return an array of posts with at least a slug property
  const posts = [
    {
      slug: "first-post",
      title: "First Post",
      date: "2024-01-01",
      content: "Content of the first post",
    },
    {
      slug: "second-post",
      title: "Second Post",
      date: "2024-02-01",
      content: "Content of the second post",
    },
    {
      slug: "third-post",
      title: "Third Post",
      date: "2024-03-01",
      content: "Content of the third post",
    },
    {
      slug: "fourth-post",
      title: "Fourth Post",
      date: "2024-04-01",
      content: "Content of the fourth post",
    },
  ];
  return posts;
}

export async function getPostBySlug(slug: string) {
  // Fetch a single post by slug (e.g., from a CMS or a database)
  // This should return a post object
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}

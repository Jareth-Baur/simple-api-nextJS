// export const dynamic = "force-dynamic";
export const revalidate = 1;

export async function GET() {
  return new Response(
    JSON.stringify({
      status: "success",
      code: 200,
      data: [
        {
          id: "1",
          title: "Introduction to Next.js",
          author: "Jane Doe",
          category: "Web Development",
          publishedDate: "2024-11-01",
          avatar: "https://i.pravatar.cc/150?img=47", // female
        },
        {
          id: "2",
          title: "Understanding React Hooks",
          author: "John Smith",
          category: "Frontend",
          publishedDate: "2024-10-15",
          avatar: "https://i.pravatar.cc/150?img=12", // male
        },
        {
          id: "3",
          title: "Mastering TypeScript",
          author: "Alice Johnson",
          category: "Programming",
          publishedDate: "2024-09-20",
          avatar: "https://i.pravatar.cc/150?img=48", // female
        },
        {
          id: "4",
          title: "CSS Grid vs Flexbox",
          author: "Bob Brown",
          category: "Design",
          publishedDate: "2024-08-30",
          avatar: "https://i.pravatar.cc/150?img=14", // male
        },
        {
          id: "5",
          title: "Building REST APIs with Node.js",
          author: "Dominador Junior",
          category: "Backend",
          publishedDate: "2024-07-12",
          avatar: "https://i.pravatar.cc/150?img=15", // male
        },
        {
          id: "6",
          title: "Deploying Apps on Vercel",
          author: "Emily White",
          category: "DevOps",
          publishedDate: "2024-06-18",
          avatar: "https://i.pravatar.cc/150?img=49", // female
        },
        {
          id: "7",
          title: "JavaScript ES2024 Features",
          author: "George King",
          category: "JavaScript",
          publishedDate: "2024-05-22",
          avatar: "https://i.pravatar.cc/150?img=11", // male
        },
        {
          id: "8",
          title: "Unit Testing with Jest",
          author: "Hannah Lee",
          category: "Testing",
          publishedDate: "2024-04-10",
          avatar: "https://i.pravatar.cc/150?img=50", // female
        },
        {
          id: "9",
          title: "GraphQL vs REST",
          author: "Ian Turner",
          category: "API",
          publishedDate: "2024-03-05",
          avatar: "https://i.pravatar.cc/150?img=16", // male
        },
        {
          id: "10",
          title: "Responsive Design Best Practices",
          author: "Karen Brooks",
          category: "UI/UX",
          publishedDate: "2024-02-01",
          avatar: "https://i.pravatar.cc/150?img=51", // female
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    },
  );
}

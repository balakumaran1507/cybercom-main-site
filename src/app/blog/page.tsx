import { Button, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/UI";
import { SectionLabel, SectionHeading } from "@/components/SectionTypography";
import Link from "next/link";
import { Clock, User } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "CTF writeups, case studies, event recaps, and security research from the CyberCom team.",
};

const posts = [
  {
    id: "post-1",
    slug: "scaling-ctfs-to-thousands",
    title: "How We Scaled Inertia CTF to 800+ Concurrent Players",
    excerpt: "A deep dive into our container orchestration engine and how we handled thousands of flag submissions without a single second of downtime.",
    category: "Case Studies",
    author: "Marcus Thorne",
    date: "Feb 24, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "post-2",
    slug: "real-cve-challenges",
    title: "Designing Real CVE-Based Challenges for Beginners",
    excerpt: "Why we believe real-world vulnerability classes are better for learning than abstract logic puzzles.",
    category: "Research",
    author: "Sarah Jenkins",
    date: "Feb 15, 2025",
    readTime: "5 min read",
  },
  {
    id: "post-3",
    slug: "attack-defence-tactics",
    title: "Top 5 Tactics for Your First Attack-Defence CTF",
    excerpt: "Mastering the balance between patching your own services and exploiting your opponents.",
    category: "Writeups",
    author: "Alex Chen",
    date: "Jan 28, 2025",
    readTime: "12 min read",
  },
  {
    id: "post-4",
    slug: "cybercom-v2-announcement",
    title: "Announcing CyberCom v2: Redesigned for the AI Era",
    excerpt: "Introducing new features designed to challenge both human teams and AI-driven agents.",
    category: "Announcements",
    author: "Alex Chen",
    date: "Jan 10, 2025",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <main className="pt-32 flex flex-col">
      {/* 1. Page Hero */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-24 text-center">
        <SectionLabel className="justify-center flex">{"// KNOWLEDGE BASE"}</SectionLabel>
        <SectionHeading>Writeups. Case Studies. Insights.</SectionHeading>
        <p className="mt-8 text-xl text-[#8a8f98] max-w-[800px] mx-auto leading-relaxed">
          From post-event breakdowns to deep-dive security research — written by the people who build and run the competitions.
        </p>
      </section>

      {/* 2. Featured Post */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto pb-12">
        <Link href={`/blog/${featuredPost.slug}`} className="group block relative rounded-3xl overflow-hidden border border-[#222324] bg-[#0d0e0f] transition-all hover:border-[#8a8f98]/30">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video bg-[#161718] flex items-center justify-center p-20">
              <div className="w-full h-full rounded-2xl border border-[#222324] bg-[#08090a] group-hover:scale-[1.02] transition-transform flex items-center justify-center">
                <span className="text-[#8a8f98]/20 font-bold text-4xl uppercase tracking-tighter">Cover Image</span>
              </div>
            </div>
            <div className="p-12 flex flex-col justify-center">
              <span className="inline-flex px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider mb-6 w-fit">Featured</span>
              <h3 className="text-3xl md:text-4xl font-medium text-white mb-6 group-hover:text-[#f4f4f5] transition-colors">{featuredPost.title}</h3>
              <p className="text-[#8a8f98] text-lg leading-relaxed mb-10 max-w-[500px]">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-[14px] text-[#8a8f98]">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* 3. Filter Tab Bar */}
      <section className="px-6 md:px-8 max-w-[1400px] mx-auto py-12">
        <Tabs defaultValue="All">
          <TabsList className="mb-12">
            {["All", "Writeups", "Case Studies", "Announcements", "Research"].map(tab => (
              <TabsTrigger key={tab} value={tab}>{tab}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="All">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col border border-[#222324] bg-[#0d0e0f] rounded-2xl overflow-hidden hover:border-[#8a8f98]/30 transition-all">
                  <div className="aspect-video bg-[#161718] flex items-center justify-center p-8">
                    <div className="w-full h-full rounded-lg border border-[#222324] bg-[#08090a] flex items-center justify-center">
                       <span className="text-[#8a8f98]/20 font-bold text-lg uppercase tracking-widest">Image</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-[12px] text-[#8a8f98] uppercase tracking-widest font-mono mb-4">{post.category}</span>
                    <h4 className="text-xl font-medium text-white mb-4 group-hover:text-[#f4f4f5] transition-colors">{post.title}</h4>
                    <p className="text-[#8a8f98] text-[15px] leading-relaxed mb-10 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-[13px] text-[#8a8f98]">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          {/* Simplified Content for other tabs for now */}
          {["Writeups", "Case Studies", "Announcements", "Research"].map(tab => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.filter(p => p.category === tab).map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col border border-[#222324] bg-[#0d0e0f] rounded-2xl overflow-hidden hover:border-[#8a8f98]/30 transition-all">
                    <div className="p-8">
                      <h4 className="text-xl font-medium text-white mb-4">{post.title}</h4>
                      <p className="text-[#8a8f98] text-[15px]">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* 5. Pagination */}
      <section className="py-24 px-6 md:px-8 max-w-[1400px] mx-auto flex items-center justify-between border-t border-[#222324]">
        <Button variant="ghost" className="opacity-50 cursor-not-allowed">← Previous</Button>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-md bg-[#f4f4f5] text-black text-[14px] font-medium">1</button>
          <button className="w-8 h-8 rounded-md hover:bg-[#161718] text-[#8a8f98] text-[14px] font-medium">2</button>
        </div>
        <Button variant="ghost">Next →</Button>
      </section>
    </main>
  );
}

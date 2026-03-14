import { SectionHeading } from "@/components/SectionTypography";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "scaling-ctfs-to-thousands",
    title: "How We Scaled Inertia CTF to 800+ Concurrent Players",
    category: "Case Studies",
    author: "Marcus Thorne",
    date: "Feb 24, 2025",
    readTime: "8 min read",
    content: `
      <p>Scaling a Capture The Flag (CTF) competition is unlike scaling a traditional web application. In a CTF, you aren't just serving static content; you're often managing hundreds of ephemeral containers, each running vulnerable services that players are actively trying to exploit.</p>
      
      <h2>The Challenge: High Concurrency and State</h2>
      <p>During Inertia CTF 2025, we faced our biggest test yet: over 800 concurrent players hitting the platform at the exact moment the competition started. Unlike standard web traffic, CTF traffic is bursty, aggressive, and often includes literal exploit payloads.</p>
      
      <h3>Our Solution: Proprietary Orchestration</h3>
      <p>We built a custom orchestration layer that sits on top of our bare-metal infrastructure. This layer handles:</p>
      <ul>
        <li><strong>Predictive Scaling:</strong> Pre-warming containers based on historical participation data.</li>
        <li><strong>Payload Isolation:</strong> Ensuring that one player's successful exploit doesn't crash the service for others.</li>
        <li><strong>Real-time Health Checks:</strong> Automatically restarting services within milliseconds if they go down.</li>
      </ul>

      <h2>The Results</h2>
      <p>By the end of the 48-hour event, our platform had processed over 45,000 flag submissions with 99.99% uptime. The scoreboard updated in real-time without a single visible lag spike for the players.</p>
    `
  },
  // Add more mock posts if needed
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-32 flex flex-col">
      <section className="px-6 md:px-8 max-w-[800px] mx-auto py-24">
        <Link href="/blog" className="flex items-center gap-2 text-[#8a8f98] hover:text-white transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-[12px] text-white bg-[#222324] px-3 py-1 rounded-full uppercase tracking-widest font-mono">
            {post.category}
          </span>
          <span className="text-[13px] text-[#8a8f98]">{post.readTime}</span>
        </div>

        <SectionHeading className="mb-8 lg:text-6xl">{post.title}</SectionHeading>

        <div className="flex items-center gap-6 text-[14px] text-[#8a8f98] mb-12 border-b border-[#222324] pb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#161718] border border-[#222324]" />
            <div className="flex flex-col">
              <span className="text-white font-medium">{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        <div 
          className="prose prose-invert prose-p:text-[#8a8f98] prose-p:leading-relaxed prose-p:text-lg prose-headings:text-white prose-headings:font-medium prose-strong:text-white max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-20 pt-12 border-t border-[#222324]">
          <h4 className="text-xl text-white font-medium mb-8">Related Posts</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Simple related post placeholders */}
             <div className="p-6 rounded-xl border border-[#222324] bg-[#0d0e0f] opacity-50">
               <span className="text-[11px] text-[#8a8f98] uppercase block mb-2">Research</span>
               <h5 className="text-white font-medium">Designing Real CVE-Based Challenges...</h5>
             </div>
             <div className="p-6 rounded-xl border border-[#222324] bg-[#0d0e0f] opacity-50">
               <span className="text-[11px] text-[#8a8f98] uppercase block mb-2">Writeups</span>
               <h5 className="text-white font-medium">Top 5 Tactics for Your First Attack-Defence...</h5>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}

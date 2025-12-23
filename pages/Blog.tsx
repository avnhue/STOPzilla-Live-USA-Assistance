
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const Blog: React.FC = () => {
  const posts = [
    {
      slug: 'fix-stopzilla-installation-issues-call-1510-370-1986',
      title: 'How to Fix STOPzilla Installation Issues – Call +1 (510)-370-1986',
      excerpt: 'Learn how USA users can fix STOPzilla installation issues step by step. If problems continue, call our live team for antispyware support.',
      date: 'May 12, 2024'
    },
    {
      slug: 'renew-stopzilla-subscription-usa-call-1510-370-1986',
      title: 'Renew STOPzilla Subscription Without Errors – Call +1 (510)-370-1986',
      excerpt: 'Avoiding common mistakes during the renewal process ensures your PC stays protected. Here is how to handle billing and license errors.',
      date: 'April 28, 2024'
    },
    {
      slug: 'fix-stopzilla-login-problems-call-1510-370-1986',
      title: 'How to Fix STOPzilla Login Problems – Call +1 (510)-370-1986',
      excerpt: 'Account access is critical for managing your security features. Learn the top fixes for login failures and account recovery in the USA.',
      date: 'April 15, 2024'
    },
    {
      slug: 'stopzilla-wont-open-troubleshooting-call-1510-370-1986',
      title: 'STOPzilla Won’t Open? Troubleshooting – Call +1 (510)-370-1986',
      excerpt: 'If your antivirus software fails to launch, your computer is vulnerable. Follow these steps to restart protection or call our expert team.',
      date: 'March 22, 2024'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">STOPzilla Support Blog</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Expert tips and guides for keeping your STOPzilla protection running smoothly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, idx) => (
            <article key={idx} className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-1"><Calendar className="w-4 h-4" /> <span>{post.date}</span></div>
                  <div className="flex items-center space-x-1"><User className="w-4 h-4" /> <span>USA Support Team</span></div>
                </div>
                <h2 className="text-2xl font-bold mb-4 leading-snug group hover:text-security-green">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-8 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="flex items-center text-security-green font-bold group"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs font-mono text-gray-400">USA Help: {PHONE_NUMBER}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

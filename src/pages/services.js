import * as React from 'react'
import Layout from '../components/layout'
import { SEO } from '../components/SEO'

const ServicesPage = () => {
  return (
    <Layout pageTitle="🧰 Services">
      <SEO
       title="Services" 
       description="These are the things I can do for you."
      />
      <h3>Paid Search 🔎</h3>
      <p>Paid search campaigns allow you to run ads within a search engine like Google, Bing, or Yahoo. These campaigns listen for search terms that signal interest in whatever you sell. When a user searches such a term, your ad is displayed alongside the organic results. </p>
      <p><strong>Perfect for: </strong>anyone who wants a reliable way to place their site on the front page of search results. Paid search allows you to leapfrog the competition when your site doesn't rank well on its own.</p>
      <h3>Paid Social 📲</h3>
      <p>Paid social lets you reach potential buyers on social media sites like Facebook, YouTube, and Instagram. Users are targeted based on their profile details or past engagement with your site. Each platform provides its own set of tools to help get your ads in front of users who are most likely to buy. </p>
      <p><strong>Perfect for: </strong>sites that already have an audience to leverage. Your existing readers and customers are a driving force in all paid social campaigns.</p>
      <h3>Technical SEO 💻</h3>
      <p>Technical SEO helps search engines to understand what your site is all about. It ensures that your site rests on a solid foundation that’s easy to crawl and index. Tech SEO involves making tweaks to your site's structure, speed, organization, navigation and more. These changes make your site more friendly to Google, and thus more likely to rank well. </p>
      <p><strong>Perfect for: </strong>almost everyone. The only sites that won’t benefit from technical SEO are those that’ve already been through it.</p>
      <h3>On-Page SEO ⌨️</h3>
      <p>While technical SEO focuses on site structure, on-page SEO is concerned with content. On-page SEO focuses on honing your site's pages to make them more useful for searchers. Keyword research is used to identify the most common terms people use when they search for what you sell. Then your site is updated to use similar language where needed. Google views this alignment between search term and site content as a basic sign of relevancy. </p>
      <p><strong>Perfect for: </strong>sites that ranks poorly for search terms related to their product or service.</p>
      <h3>Content Marketing 🖊️</h3>
      <p>Content marketing picks up where on-page SEO leaves off. It's all about using what you've learned about the search terms in your niche to generate new site content. Here, the word "content" can mean many things. Blog posts, videos, infographics and more are all fair game. Whatever form it may take, all content is crafted to resonate with your target customers. .</p>
      <p><strong>Perfect for: </strong>anyone that feels their site could do a better job of driving sales or engagement. Content marketing can also flesh out a site that's thin on material in general.</p>
      <h3>Off-Page SEO 🔗</h3>
      <p>Off-page SEO is the practice of using other domains to boost your own site's search rankings. is to generate links to your content from other sites, also known as backlinks. Google sees backlinks as a sign of authority and expertise. The more backlinks a site has, the better it ranks. Off-page SEO is all about finding and acting on these link-building opportunities. </p>
      <p><strong>Perfect for: </strong>any site with quality content that still ranks beneath the results from bigger sites.</p>
      <h3>Local SEO 🏠</h3>
      <p>The ranking factors are different for businesses that serve a particular local market. In fact, you may have noticed that Google goes so far as to separate local businesses from the rest of its results. Local SEO allows these businesses to stand out compared to nearby competitors. It's focused on optimizing your business' online listings, citations, and reviews. </p>
      <p><strong>Perfect for: </strong>all local businesses. Medical practices, law offices, remodeling companies, coffee shops and more all stand to gain. </p>
    </Layout>
  )
}

export default ServicesPage
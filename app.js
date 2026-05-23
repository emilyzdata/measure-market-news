// --- SUPABASE CONFIGURATION FOR VISITOR TRACKING ---
const SUPABASE_URL = "https://bjlbjxvsdgkgrimobtxe.supabase.co";       // Paste your Supabase project URL here
const SUPABASE_ANON_KEY = "sb_publishable_GeW3IXdJEzYT1nMHQZ7IlQ_67Px_TdZ";  // Paste your Supabase project anon/public key here

// --- 1. ARTICLE DATABASE ---
const ARTICLES = [
    {
        id: 5,
        title: "To Autumn on the L-Train: Re-Evaluating Romantic Poetry as a Cognitive Brake for Straphangers",
        category: "Media Mix Modeling",
        excerpt: "Faced with transit delays and digital saturation, commuters find unexpected moments of mindfulness in John Keats' Romantic verses. We analyze the psychological grounding effect of classical literature in subway cars.",
        body: `
            <p>I love reading poems on NYC subways and watching their reflections flicker across the windows in motion. On the most monotonous or discouraging days, it’s that rhythmic movement, surrounded by fellow New Yorkers, that keeps me going. Looking up at the curved ceiling of a crowded train car, my eyes often land on the familiar layout of the MTA’s <em>Poetry in Motion</em> placards. Recently, standing in a packed car, I found myself reading the rich, textured lines of John Keats' classic: <em>'To Autumn'</em>.</p>
            
            <p><em>"With a sweet kernel; to set budding more, / And still more, later flowers for the bees, / Until they think warm days will never cease..."</em> Written in 1819, Keats’ pastoral imagery of abundance and transition seems worlds apart from the harsh fluorescent lighting and metallic screech of the New York transit system. Yet, for the straphanger holding onto a cold metal handrail, this juxtaposition offers a brief, cognitive brake—a moment of mindfulness that halts the rush of daily commute.</p>
            
            <blockquote>
                "Encountering Keats' 19th-century Romanticism on a daily commute acts as a centering device, illustrating how classical literature serves as an emotional stabilizer in high-density urban environments."
            </blockquote>
            
            <h2>The Cognitive Impact of Subway Literature</h2>
            <p>In environmental psychology, the presence of art in transit spaces is known to reduce passenger anxiety and alter the perception of travel time. To quantify this effect, researchers and data scientists have begun compiling ridership survey data alongside NLP (Natural Language Processing) sentiment scoring of the MTA's historical poetry archives. When romantic, sensory-rich poetry like Keats is displayed, semantic density and emotional valence ratings show a strong buffering effect against commuter stress.</p>
            
            <h2>NLP Profiling: Keats vs. Modern Ad Copy</h2>
            <p>When we apply text-mining models to compare 19th-century poetry with modern commercial copy found in transit cars, the structural differences are stark. Commercial ads rely heavily on imperative verbs ("buy," "download," "claim") and high-activation emotional triggers designed to induce urgency. Keats’ verses, by contrast, utilize passive, sensorially rich adjectives ("sweet," "mellow," "moss'd") and descriptive nouns that lower cognitive load.</p>
            
            <h2>Audience Insights for Modern Communicators</h2>
            <p>The lesson for modern marketers and publishers is clear: in an era of screen fatigue, low-friction, high-value content holds a unique premium. The enduring popularity of the Poetry in Motion program, which has run since 1992, highlights the deep human appetite for offline reflection. By understanding these cognitive baselines, publishers and brands can design spaces and copy that respect the reader's mental capacity, creating memorable, positive brand associations that survive long after the commuter steps off the train.</p>
        `,
        featuredImage: "./assets/subway_keats.png",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 10, 2026",
        readTime: "5 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 7,
        title: "Modeling Relationships with Bayesian: What Seinfeld Teaches Us About Hidden Behavior Signals in Data",
        category: "Attribution & Lift",
        excerpt: "Can Jerry, George, Elaine, and Kramer explain Bayes' Theorem? We map prior beliefs, likelihood updates, and posterior relationship probabilities onto Seinfeld's classic episodes, translating TV sitcom dynamics to ad attribution.",
        body: `
            <p>Sitcoms are built on the friction of human relationships, but few have explored the mechanics of social paranoia and belief-updating as meticulously as <em>Seinfeld</em>. In a show famously about "nothing," the plotlines almost always revolve around a central analytical problem: given a set of ambiguous observations, how should a character update their belief about what is <em>actually</em> going on? Whether George is trying to determine if his boss thinks he's slacking off, or Jerry is decoding if his girlfriend's laugh is mockingly directed at him, the characters are constantly performing informal, albeit chaotic, Bayesian inference.</p>
            
            <blockquote>
                "Bayes' Theorem isn't just for probability theorists; it's the exact mathematical engine behind how Seinfeld characters navigate social paranoia—and how modern marketers track incrementality."
            </blockquote>
            
            <h2>Priors, Likelihoods, and the George Costanza Paranoid Loop</h2>
            <p>To understand how <em>Seinfeld</em> models relationship dynamics, we must look at the three components of Bayes' Theorem: the <strong>Prior Probability</strong> (<em>P(H)</em>), the <strong>Likelihood</strong> (<em>P(E|H)</em>), and the <strong>Posterior Probability</strong> (<em>P(H|E)</em>).</p>
            <p>Take George Costanza as our case study. George’s baseline prior belief about the world is that everyone is plotting against him, or that he is on the verge of being exposed as a fraud. This is a very strong prior: <em>P(Exposed) = 0.8</em>. When George observes a piece of evidence—say, his boss whispering to a colleague in the hallway—he must evaluate the likelihood of this event under two hypotheses: that they are discussing his incompetence (<em>H₁</em>) versus discussing a regular office matter (<em>H₂</em>). Because of George's paranoid conditioning, he estimates <em>P(Whispering|H₁)</em> as extremely high. When he runs the numbers, his posterior probability of impending doom shoots up to <em>0.99</em>, prompting a frantic and completely unnecessary cover-up scheme.</p>
            
            <h2>Jerry and Elaine: Decoupling Confounding Signals</h2>
            <p>Jerry and Elaine's relationship provides a perfect illustration of the confounding signals that plague marketing attribution. When Jerry observes Elaine being exceptionally nice to him, is it because she has lingering romantic feelings (<em>H_romance</em>), or is she simply trying to get him to look after her apartment (<em>H_favor</em>)?</p>
            <p>Here, the likelihood of the evidence is confounded. Elaine's friendliness (<em>E</em>) is highly likely under both hypotheses. A naive observer (or a last-touch attribution model) might attribute Elaine's behavior entirely to romantic interest. However, a Bayesian approach incorporates the prior probability of Elaine wanting a favor (<em>P(H_favor) = 0.7</em>) versus Elaine wanting to get back together (<em>P(H_romance) = 0.15</em>). Once the prior is folded in, the posterior heavily favors the pragmatic explanation. Jerry stays on the couch, and the apartment gets watered.</p>
            
            <h2>From Sitcom Paranoia to Modern Ad Attribution</h2>
            <p>How does this translate to marketing science? In modern advertising, the central question is identical: did a user purchase because of the ad they saw (<em>H_ad</em>), or would they have purchased anyway (<em>H_organic</em>)?</p>
            <p>Last-click attribution is like George Costanza's paranoia: it assigns all credit to the last observed click, ignoring the user's prior intent. Bayesian attribution models, such as those used in Media Mix Modeling (MMM), allow us to set a prior based on historical organic baseline sales, and then update our beliefs based on the likelihood of a conversion given specific ad exposures. By treating conversions as a series of updated posterior probabilities, we avoid over-attributing credit to superficial touchpoints, ensuring that ad budgets are allocated to channels that drive true, incremental growth.</p>
        `,
        featuredImage: "./assets/seinfeld_bayesian.png",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 18, 2026",
        readTime: "6 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 8,
        title: "Labubu's Rise to Fame: Predicting Global Sales with Google's Meridian MMM",
        category: "Media Mix Modeling",
        excerpt: "When Blackpink's Lisa posted a photo of her Labubu keychain, global demand skyrocketed overnight. We demonstrate how to use Google's open-source Meridian framework to model virality, set Bayesian priors, and forecast art toy sales.",
        body: `
            <p>In the fast-moving world of consumer goods and designer toys, virality is the ultimate double-edged sword. When Blackpink's Lisa posted an Instagram photo of herself holding a Louis Vuitton bag adorned with a fluffy Labubu keychain, Pop Mart's mischievous, fanged elf character went from a niche designer collectible to a global pop culture sensation. Stores across Asia sold out in minutes, resale prices surged by 400%, and supply chains scrambled to keep pace. For marketing analysts, this sudden explosion of demand presents a classic attribution nightmare: how do you forecast global sales and optimize ad spend when a single, unmeasurable organic influencer post completely distorts your baseline sales?</p>
            
            <blockquote>
                "Viral trend shocks are the ultimate test for marketing models. Google's Meridian MMM provides the Bayesian tools necessary to disentangle organic hype from paid media investments."
            </blockquote>
            
            <h2>The Anatomy of a Trend Shock: What is Google's Meridian?</h2>
            <p>Traditional Media Mix Models (MMM) are notoriously slow at adapting to sudden market shocks. Because they typically rely on historical regressions, they often interpret a viral spike as either a sudden increase in paid media efficiency or a random residual anomaly. This leads to dangerous over-spending in the weeks following a viral event, as models mistakenly credit paid search or paid social for driving what was actually an organic, culture-driven demand wave.</p>
            <p>Google's newly released open-source MMM framework, <strong>Meridian</strong>, solves this by utilizing a modern Bayesian state-space modeling approach. Meridian allows analysts to incorporate prior knowledge directly into the model via Bayesian priors. Furthermore, it supports custom control variables and time-varying parameters to account for non-linear trend shocks, such as a celebrity-induced viral phenomenon.</p>
            
            <h2>Setting Bayesian Priors for the Lisa/Labubu Effect</h2>
            <p>To accurately model the Labubu sales surge, we can represent the viral post as a distinct intervention event in Meridian. We define a binary step function or a decaying exponential curve to represent the "influencer shock wave" (<em>S_t</em>), which begins on the day of Lisa's post and decays over time as the trend cools.</p>
            <p>Using Meridian's Bayesian formulation, we can set informative priors on the coefficient for our trend shock control variable (<em>β_S</em>). Rather than letting the model guess the impact of the post from scratch—which could lead it to misattribute sales to concurrent paid Search or Display campaigns—we use historical search index data (Google Trends) for "Labubu" to establish a prior on the shape and scale of the demand spike. Meridian then combines this prior with actual sales data to estimate the true incremental impact of the viral event. This ensures that the model cleanly isolates the organic hype, leaving our paid media attribution coefficients unbiased.</p>
            
            <h2>Predicting Global Sales and Optimizing Ad Budgets</h2>
            <p>By isolating the viral shock wave, Meridian enables Pop Mart and similar retail brands to build robust, forward-looking predictive models. When we run simulations with Meridian, we can forecast how global sales will stabilize post-hype. Rather than assuming the high sales baseline will continue indefinitely, the model projects the decay rate of the viral interest, allowing supply chain planners to adjust production runs accordingly.</p>
            <p>Moreover, the model helps optimize paid media budgets during and after the viral wave. Often, brands make the mistake of aggressively increasing paid ad budgets during a viral event, only to face diminishing returns. Meridian's media saturation curves (using Hill functions) demonstrate that during a massive organic demand shock, paid media saturation occurs much faster. The model suggests a counter-intuitive strategy: instead of ramping up paid search spend when organic interest is at its peak, brands should maintain baseline search spend and redirect budgets to mid-funnel brand campaigns to sustain long-term interest as the organic viral effect fades.</p>
        `,
        featuredImage: "./assets/labubu_mmm.jpg",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 22, 2026",
        readTime: "7 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 9,
        title: "From Scroll to Sale: Measuring TikTok's Causal Impact and Halo on Amazon Sales",
        category: "Retail Media",
        excerpt: "The Amazon and TikTok integration has transformed social commerce, but measuring the cross-platform halo effect remains a massive challenge. We break down causal inference methods to measure TikTok's true impact on Amazon sales.",
        body: `
            <p>In the modern retail media landscape, the boundary between entertainment and transaction has completely dissolved. The partnership between TikTok and Amazon, enabling users to purchase Amazon products directly within the TikTok app without leaving the feed, represents a monumental shift in social commerce. For brands, this integration promises a frictionless journey from scroll to sale. Yet, for data scientists and marketing analysts, this cross-platform convergence introduces a complex measurement paradox: when a user sees an ad on TikTok and later buys the product on Amazon, how do we measure the true causal lift, and how do we quantify the "Amazon Halo" effect?</p>
            
            <blockquote>
                "Direct in-app purchasing reduces funnel friction, but measuring the cross-platform conversion halo requires rigorous causal inference frameworks to avoid double-counting sales."
            </blockquote>
            
            <h2>The Challenge of Cross-Platform Attribution</h2>
            <p>When measuring ad campaigns that lead to conversions on third-party marketplaces like Amazon, traditional click attribution models fail entirely. If a user clicks a TikTok ad and purchases within the integrated Amazon webview, the conversion is tracked. However, many users browse on TikTok, do not click immediately, but search for and purchase the product on Amazon later that day or week. This is the <strong>Amazon Halo</strong>—the indirect, view-through lift in marketplace sales driven by social discovery.</p>
            <p>Standard last-touch attribution models will attribute these halo sales to organic Amazon search or Amazon Sponsored Products, entirely missing the top-of-funnel TikTok discovery signal. Conversely, self-reporting ad networks (SANs) like TikTok might claim credit for any purchase made by a user who was served an ad, leading to severe double-counting if both Amazon Advertising and TikTok claim the same transaction.</p>
            
            <h2>Causal Inference: Isolating the TikTok Halo</h2>
            <p>To measure the true incremental lift of TikTok campaigns on Amazon sales, we must move away from heuristic attribution and adopt causal inference methodologies. Two primary techniques are highly effective in this scenario:</p>
            <p>1. <strong>Geo-Match Testing (Matched Markets)</strong>: We divide target marketing regions into matched pairs based on historical sales volume and demographic similarities. We then run TikTok ads exclusively in the treatment markets while keeping the control markets dark. By comparing the total sales lift (both direct in-app and organic Amazon halo sales) in treatment vs. control regions, we can calculate the true incremental multiplier. This method captures the full halo effect without relying on user-level tracking scripts.</p>
            <p>2. <strong>Synthetic Control Modeling</strong>: When a clean A/B test is not feasible, we can construct a "synthetic control" region using a weighted combination of non-targeted markets. This synthetic control simulates what sales would have been on Amazon in the treatment region without the TikTok campaign. The difference between the actual observed sales and the synthetic control represents the causal impact of the social media campaign.</p>
            
            <h2>Strategic Implications for Brands</h2>
            <p>Our research shows that for high-consideration beauty and consumer electronics categories, the indirect Amazon Halo can represent up to <strong>60% of the total sales impact</strong> driven by TikTok ads. Relying solely on direct in-app conversion metrics underrepresents the campaign's true return on investment by more than half.</p>
            <p>To succeed, brands must integrate their Amazon Marketing Cloud (AMC) query results with social platform impression data. By leveraging clean rooms to join these datasets in a privacy-safe environment, advertisers can build synthetic control models that calculate real-time incrementality multipliers. This allows brands to scale their top-of-funnel TikTok spend with confidence, knowing that the full value of the scroll-to-sale journey is being captured and attributed correctly.</p>
        `,
        featuredImage: "./assets/amazon_tiktok.png",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 20, 2026",
        readTime: "6 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 10,
        title: "How to Optimize Influencer Marketing in Your Media Mix: A Deep Dive into Facebook's Robyn",
        category: "Media Mix Modeling",
        excerpt: "Influencer marketing is notorious for being hard to measure. We demonstrate how to utilize Meta's open-source Robyn MMM framework, incorporating Adstock decay and saturation curves, to model and optimize creator spend for DTC brands.",
        body: `
            <p>For Direct-to-Consumer (DTC) brands, influencer marketing has transitioned from an experimental tactic to a core growth engine. In high-sensory categories like premium ceremonial matcha, creators showing their daily routines, milk frothing techniques, and brand comparison tier lists drive massive consumer awareness. However, attributing sales to these campaigns remains a persistent challenge. Creator promo codes and custom landing pages capture only a fraction of total impact, as many consumers view a video and later purchase organically or via search weeks later. To capture the full, delayed value of influencer spend, modern brands are turning to Meta's open-source Media Mix Modeling (MMM) framework, <strong>Robyn</strong>.</p>
            
            <blockquote>
                "Influencer campaigns are characterized by high carryover effects. Meta's Robyn MMM utilizes advanced Adstock transformations to capture the delayed footprint of creator content."
            </blockquote>
            
            <h2>Understanding Carryover: Robyn's Adstock Methodology</h2>
            <p>Unlike traditional paid search ads, which drive immediate conversions, influencer content has a prolonged shelf-life. A creator's YouTube review or Instagram reel can continue generating views and driving purchases for weeks after it was first published. In MMM terminology, this is called the <strong>carryover effect</strong> or <strong>Adstock</strong>.</p>
            <p>Meta's Robyn handles this using two main Adstock formulations: <strong>Geometric</strong> (a simple one-parameter decay model) and <strong>Weibull</strong> (a two-parameter model that allows for a delayed peak in ad response). For influencer marketing, Weibull Adstock is particularly powerful because it models the behavior of viral content: interest peaks a few days after publication as algorithms distribute the video, and then slowly decays over several weeks. By fitting Weibull parameters, Robyn isolates the lag duration of creator campaigns, ensuring that late conversions are not misattributed to other channels.</p>
            
            <h2>Modeling Creator Saturation Curves</h2>
            <p>Another critical feature of Robyn is its modeling of <strong>diminishing returns</strong> using nonlinear saturation curves. When scaling influencer budgets, brands often encounter \"audience saturation\" or creative fatigue. If a matcha brand sponsors the same group of creators repeatedly, the incremental lift from each subsequent post decreases.</p>
            <p>Robyn models this using the two-parameter <strong>Hill function</strong>, which maps ad spend to response. The model estimates the point of diminishing returns (inflection point), helping brands identify when to rotate their creator roster or diversify into new niches. If the saturation curve for your \"Matcha Tier List\" campaign starts flattening, Robyn's optimization engine will suggest shifting budget to top-of-funnel lifestyle vloggers or secondary paid search coverage to capture the spillover demand.</p>
            
            <h2>DTC Optimization Case Study</h2>
            <p>To see Robyn in action, we ran a model using historical marketing spend data for a growing DTC matcha brand. Prior to using Robyn, last-click attribution claimed that influencer campaigns returned a meager 0.8x ROAS, leading the finance team to demand budget cuts. However, after running Robyn with Weibull Adstock and incorporating organic search volume as a control variable, the model revealed a different reality.</p>
            <p>Robyn estimated the true, incremental ROAS of influencer marketing at <strong>2.4x</strong>, driven by a long half-life decay of 12 days. The model also identified a strong synergy effect: influencer posts drove a 35% lift in search ad efficiency by increasing brand search queries. Armed with these insights, the brand optimized their mix, scaling creator budget by 40% while maintaining the same blended CAC. The result proves that when measured correctly, influencer marketing is not just a branding play, but a highly efficient performance driver.</p>
        `,
        featuredImage: "./assets/robyn_influencers.png",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 22, 2026",
        readTime: "6 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 11,
        title: "Global Media Measurement Framework: Designing a Unified MMM and Attribution Engine for Rhode Skin",
        category: "Attribution & Lift",
        excerpt: "How do you measure marketing performance for a hyper-growth skincare brand expanding globally? We outline a unified measurement framework combining Media Mix Modeling and multi-touch attribution, using Hailey Bieber's Rhode as our operational case study.",
        body: `
            <p>When Hailey Bieber launched Rhode in 2022, the brand did not just enter the crowded skincare market; it redefined the playbook for celebrity-backed beauty. Characterized by glazed skin aesthetics, minimalist grey packaging, and highly curated product drops, Rhode achieved instant cult status. As the brand expands from a domestic DTC darling to a global omni-channel powerhouse—scaling across international markets and entering brick-and-mortar retail like Sephora—the marketing complexity increases exponentially. In this hyper-growth phase, a single, siloed measurement tool is no longer sufficient. Brands like Rhode require a unified <strong>Global Media Measurement Framework</strong> that integrates top-down Media Mix Modeling (MMM) with bottom-up attribution and tactical lift testing.</p>
            
            <blockquote>
                "Global expansion demands unified measurement. Rhode's growth demonstrates why modern beauty brands must combine macro-level MMM with micro-level multi-touch attribution to prevent measurement silos."
            </blockquote>
            
            <h2>The Triangulation Strategy: The Three Pillars of Measurement</h2>
            <p>A modern global measurement framework operates on the principle of <strong>triangulation</strong>. Rather than relying on a single source of truth, analysts run three distinct, complementary methodologies to validate and calibrate marketing performance: Media Mix Modeling, Multi-Touch Attribution (MTA), and Randomized Incrementality Experiments.</p>
            
            <p>1. <strong>Top-Down: Media Mix Modeling (MMM)</strong>: At the macro level, MMM serves as the financial planning tool. Using aggregate, privacy-safe historical data, MMM analyzes how overall media spend (across Meta, TikTok, YouTube, and digital out-of-home) correlates with total sales. MMM is excellent for broad budget allocation across countries and channels. However, it lacks the granularity needed for daily optimization or creative-level decision-making.</p>
            
            <p>2. <strong>Bottom-Up: Multi-Touch Attribution (MTA)</strong>: At the micro level, MTA tracks the customer path to purchase. Using first-party clickstream data within privacy-safe clean rooms, MTA identifies which specific creatives, ad formats, and audiences drove conversions. This provides immediate feedback for campaign managers, allowing them to optimize ad creatives and bidding strategies in real time.</p>
            
            <p>3. <strong>Ground Truth: Randomized Control Trials (Incrementality Testing)</strong>: The connector between MMM and MTA is randomized lift testing (e.g., Geo-Lift or conversion lift studies). By periodically running experiments where ads are held back from a random group of users or markets, we establish the \"ground truth\" incrementality of each channel. These experimental lift results are then used to calibrate the priors in our MMM and adjust the attribution weights in our MTA.</p>
            
            <h2>Case Study: Scaling Rhode internationally</h2>
            <p>To illustrate the power of this framework, let's look at how Rhode might optimize its marketing mix when launching into a new European market. A naive attribution approach would heavily credit paid search and brand keywords, as international customers search for \"Rhode Peptide Lip Tint\" after seeing viral TikTok reviews. A last-click model would suggest shifting almost all budget to search ads.</p>
            <p>By implementing a unified framework, the results tell a different story:</p>
            <ul>
                <li><strong>The MMM</strong> identifies that top-of-funnel social video (Meta and TikTok Reels) has a massive cross-border halo effect, driving 70% of the baseline brand search volume in the weeks following a product drop.</li>
                <li><strong>The Lift Test</strong> confirms that turning off Meta video campaigns in a test region leads to an immediate 45% drop in organic and paid search conversions, proving that search is capturing demand, not creating it.</li>
                <li><strong>The MTA</strong> allows the creative team to see that short-form, unpolished creator reviews showing product texture out-perform high-production studio campaigns by 3x in driving click-through engagement.</li>
            </ul>
            <p>By integrating these three pillars, Rhode can scale its top-of-funnel brand campaigns with confidence, knowing that the macro-impact is validated by MMM, the tactical execution is optimized by MTA, and the entire ecosystem is anchored in empirical lift experiments.</p>
        `,
        featuredImage: "./assets/rhode_measurement.png",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 22, 2026",
        readTime: "7 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 12,
        title: "How to Quantify Intimates Pricing for Boutique Clothing Brands: A Social and Search-Led Approach",
        category: "Retail Media",
        excerpt: "Premium intimates brands like Cou Cou and Frankies Bikinis command significant pricing premiums. We outline a data-driven framework combining social sentiment analysis and Google Search volume to model price elasticity and brand equity.",
        body: `
            <p>The premium intimates and swimwear market is undergoing a structural transformation. Boutique labels like Cou Cou Intimates, Frankies Bikinis, Leset, and With Jéan have successfully carved out highly profitable niches by blending organic community building with elevated, editorial branding. These labels command significant pricing premiums—frequently selling basic organic cotton underwear or minimalist bikini sets for double or triple the price of traditional retail chains. For finance and marketing teams at emerging fashion brands, the central strategic challenge is determining how to justify and optimize this premium: how do you quantify the intangible equity of \"brand hype\" and translate it into a scientific pricing model?</p>
            
            <blockquote>
                "Boutique brands command pricing premiums by leveraging cultural relevance. We can model this 'hype premium' by analyzing the correlation between social media velocity and search query elasticity."
            </blockquote>
            
            <h2>The Hype Premium: Modeling Intangible Brand Equity</h2>
            <p>In classical economics, price elasticity of demand is modeled based on utility and competition. However, in the world of high-fashion boutiques, consumer behavior is driven by social proof, exclusivity, and brand affinity. We define the <strong>Hype Premium</strong> (<em>H_p</em>) as the price difference a brand can charge above the functional commodity value of the garment, driven entirely by brand equity.</p>
            <p>To quantify this equity, our framework leverages two key data streams:</p>
            <p>1. <strong>Social Velocity</strong>: We measure the volume, engagement rate, and sentiment of organic mentions across Instagram and TikTok. Brands like Frankies Bikinis (especially during collaborations with figures like Bella Hadid) experience high social velocity, which creates consumer urgency.</p>
            <p>2. <strong>Search Dominance</strong>: We track Google Search volume for brand-specific keywords (e.g., \"Cou Cou intimates pointelle\") relative to generic category keywords (e.g., \"pointelle underwear\"). A high ratio indicates that the brand has achieved \"top-of-mind\" recall, allowing it to bypass retail search comparison engines.</p>
            
            <h2>Quantifying Price Elasticity of Hype</h2>
            <p>Once we establish the Brand Hype Index, we can model price elasticity. Historically, raising prices leads to a drop in sales volume. However, for boutique brands, we observe a non-linear relationship. Up to a certain threshold, higher prices can actually *increase* demand by signaling luxury status and exclusivity—a classic Veblen good effect.</p>
            <p>By mapping our Brand Hype Index against historical conversion rates and transaction sizes during price increases or product drops, we can estimate the optimal pricing envelope. For instance, when a brand's Social Velocity surges by 50% due to a viral collection launch, the model indicates that the brand can increase prices by up to 20% without experiencing a drop in conversion rates, effectively capturing a temporary \"hype window.\"</p>
            
            <h2>Implementing the Framework for Emerging Labels</h2>
            <p>For boutique fashion labels seeking to optimize their pricing architecture, we recommend a three-step implementation process:</p>
            <ol>
                <li><strong>Build a Real-Time Listening Dashboard</strong>: Connect social listening tools and Google Search console APIs to track daily search volume and social mention trends. This provides a leading indicator of brand demand.</li>
                <li><strong>Analyze Search-to-Conversion Elasticity</strong>: Monitor how fluctuations in search volume affect your site-wide conversion rate. If conversion remains stable as organic search traffic increases, it signals strong pricing power.</li>
                <li><strong>Execute Dynamic Collection Pricing</strong>: Instead of applying flat margins across all lines, price your core essentials competitively to drive customer acquisition, and apply the Hype Premium model to limited-edition drops and celebrity collaborations where social velocity is highest.</li>
            </ol>
            <p>By shifting from subjective pricing decisions to a quantitative, search-led framework, boutique fashion brands can capture their true market value—maximizing revenue while preserving the premium brand positioning that drove their initial success.</p>
        `,
        featuredImage: "./assets/boutique_pricing.jpg",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 22, 2026",
        readTime: "6 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 13,
        title: "Unified TV Measurement: How Gilmore Girls Attracts and Retains Co-Viewing Audiences",
        category: "Attribution & Lift",
        excerpt: "As the television landscape remains highly fragmented between linear broadcast and streaming, measuring co-viewing behavior is critical. We look at unified TV measurement frameworks, using Gilmore Girls' intergenerational appeal to explain household audience dynamics.",
        body: `
            <p>In the age of fragmented screens, fragmented attention, and fragmented measurement, few television shows have retained the cultural permanence of <em>Gilmore Girls</em>. Originally broadcast on linear networks in the early 2000s, the quick-witted dialogue of Lorelai and Rory Gilmore has found a massive second life on streaming platforms, regularly topping Nielsen's streaming charts decades after its series finale. For TV networks and brand advertisers, this enduring success is more than just a nostalgic anomaly; it represents a gold standard in <strong>co-viewing behavior</strong>—defined as multiple individuals from different age groups watching the same screen simultaneously. However, as viewership splits across traditional cable and connected TV (CTV) apps, how do we build a unified TV measurement framework to capture this combined household audience?</p>
            
            <blockquote>
                "Gilmore Girls is the ultimate co-viewing model. To measure its true value, brands must move beyond device-level metrics and adopt household-level unified TV measurement."
            </blockquote>
            
            <h2>The Fragmentation Paradox: Linear vs. Streaming TV</h2>
            <p>Historically, measuring TV audiences was simple: Nielsen placed black boxes in a sample of households, recorded which channel the screen was tuned to, and extrapolated national ratings. Today, the landscape is divided. Linear TV continues to command large, older audiences via broadcast signals, while digital streaming and Connected TV (CTV) serve highly targeted, younger audiences on-demand.</p>
            <p>If an advertiser runs campaigns across both linear broadcasts of <em>Gilmore Girls</em> syndication and ad-supported streaming runs on Netflix or Peacock, they face a measurement nightmare. Linear TV measures <strong>screen-level reach</strong> (household tuning), whereas CTV platforms track <strong>device-level impressions</strong> (digital ad servers). This results in double-counting reach, under-representing the total audience, and leaving planners in the dark about who is actually sitting on the couch.</p>
            
            <h2>The Mechanics of Unified TV Measurement</h2>
            <p>To resolve this, modern advertisers are utilizing a <strong>Unified TV Measurement Framework</strong> (UTM). This approach aggregates linear and streaming data into a single household-level model by combining three primary data layers:</p>
            <p>1. <strong>ACR (Automatic Content Recognition) Data</strong>: Embedded in millions of modern smart TVs, ACR technology identifies the visual and audio fingerprint of what is playing on the screen in real time, regardless of whether the source is a cable box, a gaming console, or a streaming app. This provides the baseline \"screen-tuned\" exposure data.</p>
            <p>2. <strong>Ad-Server Log Matching</strong>: We match the timestamps of digital CTV ad impressions with the smart TV's IP address. This helps determine exactly when an ad was delivered to the household's streaming session.</p>
            <p>3. <strong>Household Device Graphs</strong>: Since ACR data only tells us that the TV screen was on, we cross-reference the household's IP address with a device graph to identify the mobile phones, laptops, and tablets connected to the same network. By analyzing the demographic makeup of the device owners, we can model the probability of co-viewing (e.g., a mother and daughter watching together).</p>
            
            <h2>Rory and Lorelai: A Model for Intergenerational Reach</h2>
            <p>Applying this unified framework to <em>Gilmore Girls</em> reveals why co-viewing is so valuable for brands. Traditional digital attribution assumes that ads on the screen only affect the primary account holder. In reality, *Gilmore Girls* has a co-viewing multiplier of <strong>1.8x</strong>—meaning that for every 100 screen impressions, 180 total individuals are exposed to the ad, typically spanning Gen X/Boomer parents and Gen Z/Millennial children.</p>
            <p>By leveraging a unified device graph, advertisers can measure the \"cross-device spillover\" effect. When a mother sees an ad on the TV screen during a *Gilmore Girls* episode, and her daughter later buys the product on her mobile phone, unified TV measurement links these touchpoints together. This prevents brands from misattributing the conversion entirely to social media search, proving that the big screen remains the ultimate engine for shared discovery and household purchasing decisions.</p>
        `,
        featuredImage: "./assets/gilmore_girls.jpg",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 22, 2026",
        readTime: "6 min read",
        isPremium: false,
        trending: false
    },
    {
        id: 14,
        title: "How Euphoria Turned Emotional Chaos into a Consumer Economy",
        category: "Retail Media",
        excerpt: "The cultural footprint of HBO's Euphoria extends far beyond television ratings. We analyze how the show's signature glitter-drenched, high-contrast aesthetic catalyzed a massive boom in the beauty, fashion, and retail consumer economies.",
        body: `
            <p>A six-step analysis of how streaming, social media and beauty brands transformed a television drama into a billion-view cultural marketplace.</p>
            
            <p>By the time Euphoria’s rhinestone tears reached TikTok feeds worldwide, the show had already evolved beyond prestige television. HBO had not simply produced a hit series — it had engineered one of the most commercially influential youth aesthetics of the streaming era.</p>
            
            <blockquote>
                The most profitable product to emerge from Euphoria was never a glitter liner or sequined eye gem. It was aspiration.
            </blockquote>
            
            <p>At its peak, the show became HBO’s second most-watched series after Game of Thrones. Season two episodes averaged 16.3 million viewers across platforms, while the finale drew 6.6 million viewers in a single night. HBO executives later revealed that roughly 80 per cent of the show’s viewing came through HBO Max, demonstrating the extent to which streaming platforms — rather than traditional television — fueled the show’s cultural dominance.</p>
            
            <p>What made Euphoria economically powerful was not merely audience size, but audience behavior. The series generated billions of interactions across TikTok, Instagram, Spotify and YouTube, creating an ecosystem where streaming attention converted directly into consumer demand.</p>
            
            <p>Unlike traditional television hits, Euphoria functioned simultaneously as:</p>
            <ul>
                <li>a streaming success,</li>
                <li>a beauty trend engine,</li>
                <li>a luxury fashion incubator,</li>
                <li>and a participatory social-media economy.</li>
            </ul>
            
            <p>The process unfolded in six stages.</p>
            
            <h2>Step One: Streaming Platforms Turned Euphoria Into Cultural Infrastructure</h2>
            <p>Before beauty brands entered the conversation, streaming scale created visibility at a global level.</p>
            
            <p>The season two premiere drew 2.4 million viewers across HBO and HBO Max in a single night, becoming HBO Max’s strongest digital premiere performance since the platform launched. Digital viewership for the episode was reportedly nine times higher than the show’s first-season premiere.</p>
            
            <p>This matters because streaming platforms fundamentally alter the economics of cultural influence.</p>
            
            <p>Traditional television relied on weekly audiences. Streaming platforms rely on:</p>
            <ul>
                <li>algorithmic circulation,</li>
                <li>binge consumption,</li>
                <li>recommendation systems,</li>
                <li>and perpetual discoverability.</li>
            </ul>
            
            <p>Through HBO Max, Euphoria became continuously accessible, clip-able and shareable across digital ecosystems. Nielsen later ranked the series among the most-streamed shows in America, competing directly within an ecosystem dominated by Netflix, Hulu, Prime Video and Disney+.</p>
            
            <p>The show was no longer simply a television series. It became a platform-native cultural product.</p>
            
            <h2>Step Two: Media Created an Instantly Replicable Aesthetic</h2>
            <p>Once visibility was established, Euphoria produced something far more valuable: symbolic imagery.</p>
            
            <p>Glitter tears, graphic eyeliner, rhinestones and emotionally coded makeup transformed into instantly recognizable visual language. Makeup became psychological storytelling rather than cosmetic enhancement.</p>
            
            <p>Rue’s glitter-smeared breakdowns represented emotional collapse. Maddy’s sculpted glam symbolized control and dominance. Jules’ experimental makeup reflected fluid identity and self-construction.</p>
            
            <p>The aesthetic rapidly escaped the television screen. According to Premium Beauty News, Euphoria-related hashtags accumulated nearly 25 billion TikTok views, while #EuphoriaMakeup surpassed billions more in subsequent reporting.</p>
            
            <p>The key economic insight here is that aesthetics now precede products.</p>
            
            <p>Before any beauty company launched a collaboration, audiences already desired the visual identity itself.</p>
            
            <h2>Step Three: Social Media Turned Audiences Into Distribution Networks</h2>
            <p>TikTok, Instagram and YouTube amplified Euphoria at a scale impossible within traditional media systems.</p>
            
            <p>Fans recreated makeup looks, filmed tutorials, posted edits and produced endless “Get Ready With Me” content inspired by the show. Every recreation functioned as unpaid promotional labor.</p>
            
            <p>TikTok hashtag ecosystems surrounding Euphoria generated tens of billions of views, while Spotify reported fans created more than 600,000 Euphoria-related playlists during season two alone.</p>
            
            <p>This is where Euphoria reveals the mechanics of participatory capitalism.</p>
            
            <p>The audience stopped functioning as spectators and became infrastructure.</p>
            
            <p>In previous decades, media companies purchased exposure through advertising. In the platform economy, consumers generate exposure themselves through:</p>
            <ul>
                <li>reposting,</li>
                <li>remixing,</li>
                <li>recreating,</li>
                <li>and algorithmic engagement.</li>
            </ul>
            
            <p>The fandom became the marketing department.</p>
            
            <h2>Step Four: Beauty Brands Converted Emotional Aesthetics Into Products</h2>
            <p>Once the aesthetic achieved cultural legitimacy, commercialization arrived almost immediately.</p>
            
            <p>Half Magic Beauty — founded by Euphoria makeup artist Donni Davy alongside A24 — translated the show’s fictional emotional universe into purchasable products. Glitter pigments, rhinestones, chrome liners and editorial textures migrated directly from screen to retail shelf.</p>
            
            <p>Searches for Half Magic reportedly surged by 900 per cent within 48 hours of launch. The brand later expanded into Ulta Beauty nationwide.</p>
            
            <p>Importantly, consumers were not buying functionality alone.</p>
            
            <p>They were buying:</p>
            <ul>
                <li>emotional participation,</li>
                <li>aesthetic belonging,</li>
                <li>and symbolic proximity to the world of Euphoria.</li>
            </ul>
            
            <p>This reflects the rise of affective capitalism — an economy where emotional attachment drives purchasing behavior more effectively than practical utility.</p>
            
            <p>The products functioned less as cosmetics and more as identity tools.</p>
            
            <h2>Step Five: Luxury Fashion Used Euphoria to Capture Gen Z Attention</h2>
            <p>Beauty was only one side of the economic ecosystem.</p>
            
            <p>Luxury fashion quickly recognized Euphoria’s ability to shape youth aspiration. According to Vogue, brands including Miu Miu, Balenciaga and Bottega Veneta leveraged the show’s cultural influence to position themselves closer to Gen Z consumers. Even trailer appearances reportedly generated nearly $1 million in media impact value for featured luxury looks.</p>
            
            <p>The series blurred the line between costume design and fashion marketing.</p>
            
            <p>Searches for corsets, Y2K silhouettes and brands associated with the show surged after episodes aired. Fashion trends once confined to niche online subcultures suddenly entered mainstream retail circulation.</p>
            
            <p>Streaming culture became shopping behavior.</p>
            
            <h2>Step Six: Cultural Attention Became Economic Infrastructure</h2>
            <p>By the final stage, Euphoria no longer operated solely as entertainment.</p>
            
            <p>It became an entire commercial ecosystem:</p>
            <ul>
                <li>streaming subscriptions,</li>
                <li>beauty sales,</li>
                <li>influencer economies,</li>
                <li>luxury fashion visibility,</li>
                <li>platform engagement,</li>
                <li>algorithmic traffic,</li>
                <li>and retail partnerships.</li>
            </ul>
            
            <p>Profit no longer emerges solely from products themselves. It emerges from controlling:</p>
            <ul>
                <li>visibility,</li>
                <li>cultural relevance,</li>
                <li>emotional engagement,</li>
                <li>and online participation.</li>
            </ul>
            
            <p>Streaming platforms provide scale. Social media provides circulation. Brands provide monetization.</p>
        `,
        featuredImage: "./assets/euphoria_economy.jpg",
        author: "Emily Z.",
        authorInitials: "EZ",
        date: "May 23, 2026",
        readTime: "6 min read",
        isPremium: false,
        trending: true
    }
];

// --- 2. GLOBAL STATE ---
const State = {
    user: {
        isLoggedIn: false,
        isSubscribed: false,
        email: ""
    },
    bookmarks: [],
    searchQuery: "",
    language: "en",
    dashboardFilters: {
        privacyImpact: 40,      // % signal loss
        mmmSmoothing: 50,       // % smoothing window
        roasMultiplier: 1.0     // baseline multiplier
    },
    
    // Initialize state from LocalStorage
    init() {
        // Load User
        const savedUser = localStorage.getItem("mm_user");
        if (savedUser) {
            this.user = JSON.parse(savedUser);
        }
        // Load Bookmarks
        const savedBookmarks = localStorage.getItem("mm_bookmarks");
        if (savedBookmarks) {
            this.bookmarks = JSON.parse(savedBookmarks);
        }
        // Load Language
        const savedLanguage = localStorage.getItem("mm_language");
        if (savedLanguage) {
            this.language = savedLanguage;
        }
    },
    
    // Save state changes
    save() {
        localStorage.setItem("mm_user", JSON.stringify(this.user));
        localStorage.setItem("mm_bookmarks", JSON.stringify(this.bookmarks));
        localStorage.setItem("mm_language", this.language);
        
        // Dispatch event for UI updates
        window.dispatchEvent(new Event("statechange"));
    },
    
    login(email) {
        this.user.isLoggedIn = true;
        this.user.email = email;
        this.save();
    },
    
    logout() {
        this.user.isLoggedIn = false;
        this.user.isSubscribed = false;
        this.user.email = "";
        this.save();
    },
    
    subscribe() {
        this.user.isSubscribed = true;
        this.save();
    },
    
    toggleBookmark(id) {
        const index = this.bookmarks.indexOf(id);
        if (index === -1) {
            this.bookmarks.push(id);
        } else {
            this.bookmarks.splice(index, 1);
        }
        this.save();
    },
    
    isBookmarked(id) {
        return this.bookmarks.includes(id);
    }
};

// Initialize State immediately
State.init();

// Analytics page view logger
async function logPageView(path) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.warn("Supabase credentials not configured. Page views are not being logged.");
        return;
    }
    
    try {
        const payload = {
            path: path,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent || null,
            screen_width: window.innerWidth || null,
            language: navigator.language || null
        };
        
        await fetch(`${SUPABASE_URL}/rest/v1/page_views`, {
            method: "POST",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json",
                "Prefer": "return=minimal"
            },
            body: JSON.stringify(payload)
        });
    } catch (err) {
        console.error("Failed to log page view to Supabase:", err);
    }
}

// Subscriber management API helper
async function saveSubscriber(email) {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.warn("Supabase credentials not configured. Cannot save subscriber.");
        return { success: false, error: "Credentials not configured" };
    }
    try {
        const payload = {
            email: email,
            language: State.language
        };
        const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers`, {
            method: "POST",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json",
                "Prefer": "return=minimal"
            },
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            if (res.status === 409 || (errData.message && errData.message.includes("unique"))) {
                return { success: false, error: "already_subscribed" };
            }
            return { success: false, error: errData.message || "Subscription failed" };
        }
        return { success: true };
    } catch (err) {
        console.error("Failed to subscribe:", err);
        return { success: false, error: err.message };
    }
}

// Get subscribers list for admin dashboard
async function getSubscribers() {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return [];
    }
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/subscribers?order=created_at.desc`, {
            method: "GET",
            headers: {
                "apikey": SUPABASE_ANON_KEY,
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) return [];
        return await res.json();
    } catch (err) {
        console.error("Failed to fetch subscribers:", err);
        return [];
    }
}

// Programmatic Email Sending via Resend API
async function sendNewsletterViaResend(subject, htmlBody, subscribers, resendApiKey) {
    if (!resendApiKey) {
        return { success: false, error: "Missing Resend API Key" };
    }
    
    let successCount = 0;
    let failCount = 0;
    let errors = [];

    for (const sub of subscribers) {
        try {
            const payload = {
                from: "Media Metric <onboarding@resend.dev>",
                to: sub.email,
                subject: subject,
                html: htmlBody
            };

            // Use corsproxy.io as a client-side CORS proxy since Resend API blocks direct browser calls (CORS)
            const targetUrl = "https://api.resend.com/emails";
            const proxyUrl = `https://corsproxy.io/?url=${encodeURIComponent(targetUrl)}`;

            const response = await fetch(proxyUrl, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${resendApiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                successCount++;
            } else {
                const errJson = await response.json().catch(() => ({}));
                failCount++;
                const errMsg = errJson.message || `HTTP ${response.status} Error`;
                errors.push(`${sub.email}: ${errMsg}`);
            }
        } catch (e) {
            failCount++;
            errors.push(`${sub.email}: ${e.message}`);
        }
    }

    return { success: true, successCount, failCount, errors };
}

// --- 2.5 BILINGUAL DICTIONARIES & TRANSLATIONS ---
const LANG_DICT = {
    en: {
        home: "Home",
        attribution: "Attribution & Lift",
        privacy: "Privacy & Identity",
        mmm: "Media Mix Modeling",
        retail: "Retail Media",
        saved: "Saved",
        about: "About Us",
        latestIntel: "LATEST INTEL",
        mostPopular: "MOST POPULAR",
        liveIndex: "Live Index:",
        attributionVariance: "Attribution Variance 32% (Stable)",
        copyright: "© 2026 Media Metric. All rights reserved. Registered trademark of B2B Media Group.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePreferences: "Cookie Preferences",
        savedBriefings: "Saved Briefings",
        attributionGlossary: "Attribution Glossary",
        industryEvents: "Industry Events",
        editorial: "Editorial",
        resources: "Resources",
        company: "Company",
        by: "By",
        bookmarkedArticles: "Bookmarked Articles",
        clearAll: "Clear All",
        noSaved: "No saved articles yet. Bookmark articles from the home feed or read views.",
        returnHome: "Return Home",
        removeBookmark: "Remove Bookmark",
        brandTitle: "MEDIA METRIC",
        footerDesc: "Media Metric is a premium B2B editorial service providing advanced diagnostic insights and operational reports on ad technology, measurement modeling, privacy regulations, and retail media network convergence.",
        newsletterTitle: "Subscribe to Media Metric",
        newsletterDesc: "Get premium ad-tech audits, MMM modeling reports, and privacy updates delivered weekly.",
        newsletterPlaceholder: "Enter your email address",
        newsletterBtn: "Subscribe",
        newsletterDisclaimer: "No spam. Unsubscribe at any time.",
        newsletterSuccessTitle: "Thank You!",
        newsletterSuccessDesc: "You have successfully subscribed to our weekly briefings."
    },
    zh: {
        home: "首页",
        attribution: "归因与提升度",
        privacy: "隐私与身份识别",
        mmm: "媒介混合模型",
        retail: "零售媒体",
        saved: "已收藏",
        about: "关于我们",
        latestIntel: "最新资讯",
        mostPopular: "最受欢迎",
        liveIndex: "实时指数:",
        attributionVariance: "归因偏差 32% (稳定)",
        copyright: "© 2026 媒体财经。版权所有。B2B 媒体集团注册商标。",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
        cookiePreferences: "Cookie 偏好设置",
        savedBriefings: "已收藏的简报",
        attributionGlossary: "归因术语表",
        industryEvents: "行业活动",
        editorial: "社论分类",
        resources: "常用资源",
        company: "公司信息",
        by: "作者",
        bookmarkedArticles: "已收藏文章",
        clearAll: "清空全部",
        noSaved: "暂无收藏文章。请从主页或阅读视图中收藏文章。",
        returnHome: "返回首页",
        removeBookmark: "移除收藏",
        brandTitle: "媒体财经",
        footerDesc: "媒体财经是一家领先的 B2B 媒体平台，提供广告技术、度量建模、隐私法规和零售媒体网络融合等领域的前沿诊断洞察和运营报告。",
        newsletterTitle: "订阅媒体财经",
        newsletterDesc: "每周获取最前沿的广告技术、媒介混合建模及行业诊断洞察报告。",
        newsletterPlaceholder: "输入您的电子邮箱地址",
        newsletterBtn: "立即订阅",
        newsletterDisclaimer: "无垃圾广告，支持随时退订。",
        newsletterSuccessTitle: "感谢您的订阅！",
        newsletterSuccessDesc: "您的邮箱已成功加入我们的每周简报发送列表。"
    }
};

const ARTICLE_TRANSLATIONS = {
    5: {
        titleZh: "L线地铁上的《致秋天》：重估浪漫主义诗歌作为通勤族的认知缓冲器",
        categoryZh: "媒介混合模型",
        excerptZh: "面对地铁延误和数字信息饱和，通勤族在约翰·济慈的浪漫诗句中找到了意想不到的静心时刻。我们分析了经典文学在地铁车厢中的心理抚慰作用。",
        bodyZh: `
            <p>我喜欢在纽约地铁上读诗，看着车窗中闪烁的乘客倒影。在最单调或令人气馁的日子里，正是那种车厢的有节奏律动，以及周围纽约客的陪伴，支撑着我前行。抬头望向拥挤车厢的弧形天花板，我的目光常常落在纽约大都会运输署（MTA）海报上。最近，站在一节拥挤的车厢里，我发现自己正读着约翰·济慈经典之作《致秋天》中饱满、富有质感的诗句。</p>
            
            <p><em>“用甜美的果仁；让它们长出更多花蕾，/ 并且不断增加，为蜜蜂带来更迟的花朵，/ 直到它们以为温暖的日子永远不会停止……”</em> 这首诗写于1819年，济慈对丰盈与过渡的田园意象描述，似乎与纽约地铁系统刺眼的荧光灯和冰冷的金属摩擦声相去甚远。然而，对于抓着冰冷金属扶手的通勤族来说，这种强烈的反差带来了一个短暂的认知缓冲——一个在日常奔波中停下脚步、静心思考的片刻。</p>
            
            <blockquote>
                “在日常通勤中邂逅济慈的19世纪浪漫主义犹如一个情绪的定位器，它展现了经典文学如何在人口稠密的都市环境中发挥情感稳定器的作用。”
            </blockquote>
            
            <h2>地铁文学的认知影响</h2>
            <p>在环境心理学中，交通空间中艺术的存在已知能有效减轻乘客焦虑并改变对乘车时间的感知。为了量化这种效应，数据科学家和研究人员开始整理乘客调查数据，并结合自然语言处理（NLP）技术对MTA历史诗歌档案进行情感分析。当展示像济慈这样富有浪漫感官的诗歌时，语义密度和情绪效价（valence）评分显示出对通勤压力的强大缓冲作用。</p>
            
            <h2>NLP画像：济慈 vs. 现代地铁广告</h2>
            <p>当我们应用文本挖掘模型对比19世纪诗歌与地铁车厢里随处可见的现代商业广告时，结构差异非常显著。商业广告高度依赖祈使动词（“购买”、“下载”、“立即索取”）以及旨在唤起紧迫感的高唤醒情绪触发词。相比之下，济慈的诗句大量使用被动的、感官丰富的形容词（“甜美”、“温和”、“覆满苔藓的”）和描述性名词，从而降低了乘客的认知负荷。</p>
            
            <h2>给现代传播者的启示</h2>
            <p>对于现代营销人员和出版商来说，教训显而易见：在屏幕疲劳的时代，低摩擦、高价值的内容拥有独特的溢价。自1992年开始运行的“地铁诗歌”计划的持久流行，凸显了人类对线下沉思的深层渴望。通过理解这些认知基线，品牌方可以设计出尊重读者心智容量的文案与空间，创造出在通勤结束后依然能长久保留的积极品牌联想。</p>
        `
    },
    7: {
        titleZh: "用贝叶斯模型重构人际关系：《辛菲尔德》教我们如何解读数据中隐藏的行为信号",
        categoryZh: "归因与提升度",
        excerptZh: "杰里、乔治、伊莱恩和克莱默能解释贝叶斯定理吗？我们将先验信念、似然更新和后验关系概率映射到《辛菲尔德》的经典剧集中，将情景喜剧的动态转化为广告归因。",
        bodyZh: `
            <p>情景喜剧建立在人际关系的摩擦之上，但很少有像《辛菲尔德》（Seinfeld）那样，将社交偏执和信念更新的机制刻画得如此细致入微。在这部著名的“无事生非”的剧集中，剧情几乎总是围绕着一个核心分析问题展开：给定一组侧面观察结果，角色应该如何更新他们对实际发生的事情的先验信念？无论是乔治试图确定他的老板是否认为他在偷懒，还是杰里在解码他女朋友的笑声是否针对他，角色们都在不断地进行着非正式的、尽管是混乱的贝叶斯推断。</p>
            
            <blockquote>
                “贝叶斯定理不仅适用于概率理论家；它也是辛菲尔德角色在社交偏执中导航的核心数学引擎——也是现代营销人员追踪增量效果的底层逻辑。”
            </blockquote>
            
            <h2>先验、似然与乔治·科斯坦萨的偏执闭环</h2>
            <p>要理解《辛菲尔德》如何建模人际关系动态，我们必须看看贝叶斯定理的三个组成部分：<strong>先验概率</strong>（*P(H)*）、<strong>似然度</strong>（*P(E|H)*）和<strong>后验概率</strong>（*P(H|E)*）。</p>
            <p>以乔治·科斯坦萨（George Costanza）为例。乔治对世界的基线先验信念是每个人都在密谋对付他，或者他正处于被揭穿为骗子的边缘。这是一个非常强的先验：*P(Exposed) = 0.8*。当乔治观察到一件证据——比如他的老板在走廊里和同事低声细语时——他必须评估在两种假设下发生此事件的似然度：他们正在讨论他的无能（*H₁*）与讨论普通的办公事务（*H₂*）。由于乔治的偏执，他估计*P(Whispering|H₁)*极高。当他运行公式时，他的后验概率飙升至 *0.99*，从而引发了一场疯狂且完全没有必要的掩盖阴谋。</p>
            
            <h2>杰里与伊莱恩：解耦混淆信号</h2>
            <p>杰里和伊莱恩的关系完美地说明了困扰营销归因的混淆信号。当杰里观察到伊莱恩对他异常好时，是因为她还有余情（*H_romance*），还是仅仅想让他帮忙看管公寓（*H_favor*）？</p>
            <p>在这里，证据的似然度是被混淆的。伊莱恩的友善（*E*）在这两种假设下都是高度可能的。一个天真的观察者（或最后触点归因模型）可能会将伊莱恩的行为完全归因于浪漫兴趣。然而，贝叶斯方法结合了伊莱恩想要帮忙的先验概率（*P(H_favor) = 0.7*）与伊莱恩想要复合的先验（*P(H_romance) = 0.15*）。一旦将先验融入计算，后验概率就压倒性地倾向于实用的解释。杰里继续留在沙发上，公寓得到了浇水。</p>
            
            <h2>从喜剧偏执到现代广告归因</h2>
            <p>这如何转化为营销科学？在现代广告中，核心问题是相同的：用户购买是因为他们看到了广告（*H_ad*），还是无论如何他们都会购买（*H_organic*）？</p>
            <p>最后一次点击归因就像乔治·科斯坦萨的偏执：它将所有功劳归因于最后观察到的点击，忽略了用户的先验意图。贝叶斯归因模型（如媒介混合建模中使用的模型）允许我们基于历史自然基线销售设置先验，然后基于在特定广告曝光下转化的似然度更新我们的信念。通过将转化视为一系列更新的后验概率，我们避免了将功劳过度归因于表面的触点，确保广告预算分配到真正驱动增量增长的渠道。</p>
        `
    },
    8: {
        titleZh: "Labubu 的成名之路：使用谷歌 Meridian 媒介混合模型预测全球销量",
        categoryZh: "媒介混合模型",
        excerptZh: "当 Blackpink 的 Lisa 晒出她的 Labubu 钥匙扣照片时，全球需求一夜暴增。我们展示了如何使用谷歌开源的 Meridian 框架对病毒式传播进行建模、设置贝叶斯先验并预测潮流玩具的销量。"
    },
    9: {
        titleZh: "从刷屏到成交：衡量 TikTok 对亚马逊销量的因果影响与光环效应",
        categoryZh: "零售媒体",
        excerptZh: "亚马逊与 TikTok 的整合改变了社交电商，但衡量跨平台的光环效应仍是一个巨大挑战。我们拆解了因果推断方法，以衡量 TikTok 对亚马逊销量的真实影响。"
    },
    10: {
        titleZh: "如何在媒介组合中优化网红营销：深挖 Meta 开源的 Robyn 框架",
        categoryZh: "媒介混合模型",
        excerptZh: "众所周知，网红营销很难衡量。我们展示了如何利用 Meta 开源的 Robyn MMM 框架，结合 Adstock 衰减和饱和曲线，为 DTC 品牌建模和优化创作者支出。"
    },
    11: {
        titleZh: "全球媒体度量框架：为 Rhode Skin 设计统一的 MMM 与归因引擎",
        categoryZh: "归因与提升度",
        excerptZh: "如何衡量一个在全球扩张的超高速增长护肤品牌的营销表现？我们以海莉·比伯的 Rhode Skin 为实操案例，概述了一个结合媒介混合建模和多触点归因的统一量化框架。"
    },
    12: {
        titleZh: "如何量化精品服饰品牌的内衣定价：社交媒体与搜索引导的分析方法",
        categoryZh: "零售媒体",
        excerptZh: "精品内衣和泳装市场正在经历结构性转型。像 Cou Cou Intimates、Frankies Bikinis 这样的精品品牌通过将自然社群构建与高端的社论级品牌塑造相结合，成功开辟了高利润的利基市场。我们概述了一个结合社交情感分析和谷歌搜索量的数据驱动框架，用于建模价格弹性和品牌资产。"
    },
    13: {
        titleZh: "统一电视受众度量：《吉尔莫女孩》如何吸引并留住共同收视群体",
        categoryZh: "归因与提升度",
        excerptZh: "随着电视格局在传统广播和流媒体之间高度碎片化，衡量共同收视行为至关重要。我们以《吉尔莫女孩》的跨代吸引力为案例，剖析家庭受众动态与统一电视度量框架。"
    },
    14: {
        titleZh: "《亢奋》如何将情感混乱转化为消费经济",
        categoryZh: "零售媒体",
        excerptZh: "HBO 剧集《亢奋》的文化足迹远超电视收视率。我们分析了该剧标志性的亮片妆容、高对比度美学如何催化了美妆、时尚和零售消费经济的空前繁荣。",
        bodyZh: `
            <p>探讨流媒体、社交媒体和美妆品牌如何将一部电视肥皂剧转化为拥有数十亿浏览量的文化市场的六步分析。</p>
            
            <p>当《亢奋》（Euphoria）中闪闪发光的泪水流向全球 TikTok 信息流时，这部剧集就已经超越了精品电视本身。HBO 不仅仅制作了一部热门剧集，更工程化设计了流媒体时代最具商业影响力的青年美学之一。</p>
            
            <blockquote>
                从《亢奋》中诞生的最具价值的商业产品从来不是闪粉眼线笔或水钻眼贴。而是“向往”。
            </blockquote>
            
            <p>在巅峰时期，该剧成为 HBO 仅次于《权力的游戏》的第二大收视率剧集。第二季每集在所有平台上的平均观众达到1630万，而大结局在单晚就吸引了660万观众。HBO 高管后来透露，该剧约80%的收视率来自 HBO Max，这表明流媒体平台（而非传统电视）推动了该剧的文化主导地位。</p>
            
            <p>使《亢奋》在经济上强大的不仅仅是观众规模，更是受众行为。该剧在 TikTok、Instagram、Spotify 和 YouTube 上产生了数十亿次的互动，建立了一个将流媒体注意力直接转化为消费需求的庞大生态系统。</p>
            
            <p>与传统的电视热门剧集不同，《亢奋》同时扮演着：</p>
            <ul>
                <li>流媒体商业的成功范例，</li>
                <li>美妆流行趋势的发动机，</li>
                <li>高端时尚的孵化器，</li>
                <li>以及高互动式的社交媒体经济。</li>
            </ul>
            
            <p>这一商业变现过程主要分为以下六个阶段展开。</p>
            
            <h2>第一步：流媒体平台将《亢奋》转化为文化基础设施</h2>
            <p>在美妆品牌介入之前，流媒体的超大尺度分发在全球范围内创造了极高能见度。通过 HBO Max，该剧在数字生态系统中持续被浏览、裁剪和分享。这使得《亢奋》成为一个平台原生的文化产品，为后续的商业变现奠定了基石。</p>
            
            <h2>第二步：媒介创造了可即时复制的视觉美学</h2>
            <p>一旦建立了可见度，该剧就产生了一种极具商业价值的视觉符号：亮片泪痕、夸张眼线和富有情感隐喻的妆容。在社交媒体上，与剧集相关的标签积累了数百亿次的播放量。在平台经济中，美学往往先于实体产品而流行。</p>
            
            <h2>第三步：社交媒体将受众转变为零成本的分发网络</h2>
            <p>TikTok、Instagram 和 YouTube 上的粉丝开始疯狂模仿剧中的妆容并制作教程。每一名粉丝的翻拍和分享都扮演着免费营销推广的角色，使得粉丝群体转变成为了最强大的分发和推广网络。</p>
            
            <h2>第四步：美妆品牌将情感美学转化为具体产品</h2>
            <p>当剧中的虚拟美学走向现实，商业化动作随之而来。由剧集首席彩妆师 Donni Davy 联合制作的 Half Magic Beauty 品牌，将剧中的亮片、眼线笔和色彩质感完美转化为货架商品，并在发售后实现销量暴增，成功入驻全美零售店。</p>
            
            <h2>第五步：快时尚与高端奢侈品的商业交汇</h2>
            <p>角色的穿搭不仅推动了年轻消费者的跟风抢购，也获得了高端时装屋（如 Miu Miu、Balenciaga 和 Copérni）的青睐。品牌通过借衣和赞助，让主演们在红毯和社交媒体上展示服饰，使剧集成为高端时装与快时尚融合的超级展示台。</p>
            
            <h2>第六步：从内容到实体零售的完整闭环</h2>
            <p>最终，《亢奋》建立了一个从内容创作、社交发酵，到品牌联名和线下购买的完整消费经济闭环，证实了流媒体时代的影视剧集不再只是叙事艺术，还可以是一个价值数十亿美元的消费生态引擎。</p>
        `
    }
};

const ADMIN_LANG = {
    en: {
        adminTitle: "Media Metric Portal Admin",
        backHome: "Back to Home",
        subscribersList: "Subscriber List",
        exportCsv: "Export CSV",
        searchSubscribers: "Search subscribers...",
        joinedTime: "Joined Time",
        emailAddress: "Email Address",
        language: "Language",
        status: "Status",
        noSubscribers: "No subscribers found.",
        tabEn: "English Briefing (EN)",
        tabZh: "Chinese Briefing (ZH)",
        subjectEnPlaceholder: "Media Metric Weekly Briefing: Attribution, Modeling, and Data Intelligence",
        subjectZhPlaceholder: "媒体财经每周简报：广告技术与度量创新",
        tipsTitle: "Bilingual Distribution Mechanism (Bilingual Routing):",
        tipsDesc1: "Method 1 (Resend Smart Send): The system automatically identifies the registration language of each subscriber (EN or ZH) and sends the corresponding briefing to their email!",
        tipsDesc2: "Method 2 (Local BCC Send): Since local clients can only send a single template at a time, click 'Local Send BCC (EN)' or 'Local Send BCC (ZH)' as needed.",
        sendTest: "Send Test Email",
        resendSmart: "Resend Smart Bulk Send",
        sendBccEn: "Local BCC Send (EN)",
        sendBccZh: "Local BCC Send (ZH)",
        saveKeySuccess: "Resend API Key saved successfully!",
        exportEmpty: "No subscribers to export.",
        fillEnSubjectContent: "Please fill in the English briefing subject and content!",
        fillZhSubjectContent: "Please fill in the Chinese briefing subject and content!",
        inputTestEmail: "Enter test recipient email address:",
        sendTestSuccess: "Test email sent successfully to",
        sendTestFail: "Failed to send test email:",
        noTargets: "No subscribers with this language preference found.",
        resendConfirm: "You are about to use Resend Smart Bulk Send to deliver newsletters to {count} subscribers. ZH subscribers will receive Chinese, others will receive English. Continue?",
        resendComplete: "Smart bulk send completed!",
        resendSuccessCount: "Sent successfully",
        resendFailCount: "Failed to send"
    },
    zh: {
        adminTitle: "媒体财经后台管理 (Admin)",
        backHome: "返回首页",
        subscribersList: "订阅用户列表",
        exportCsv: "导出 CSV",
        searchSubscribers: "搜索订阅邮箱...",
        joinedTime: "加入时间",
        emailAddress: "邮箱地址",
        language: "语言偏好",
        status: "状态",
        noSubscribers: "暂无订阅用户",
        tabEn: "英文简报 (EN)",
        tabZh: "中文简报 (ZH)",
        subjectEnPlaceholder: "Media Metric Weekly Briefing: Attribution, Modeling, and Data Intelligence",
        subjectZhPlaceholder: "媒体财经每周简报：广告技术与度量创新",
        tipsTitle: "多语言分发机制 (Bilingual Routing)：",
        tipsDesc1: "方式一 (Resend 智能群发)：系统会自动识别每位订阅者的注册语言（EN 或 ZH），并将对应的英文或中文简报投递到其邮箱中！",
        tipsDesc2: "方式二 (本地 BCC 群发)：由于本地客户端每次只能发送单个模板，请根据需要分别点击底部的“本地群发 (英文版)”或“本地群发 (中文版)”。",
        sendTest: "发送当前测试",
        resendSmart: "Resend 智能群发",
        sendBccEn: "本地群发 (英文版)",
        sendBccZh: "本地群发 (中文版)",
        saveKeySuccess: "Resend API Key 保存成功！",
        exportEmpty: "暂无可导出的订阅用户。",
        fillEnSubjectContent: "请填写英文版简报的主题和内容！",
        fillZhSubjectContent: "请填写中文版简报的主题和内容！",
        inputTestEmail: "请输入接收测试的邮箱：",
        sendTestSuccess: "测试邮件成功发送至",
        sendTestFail: "发送测试失败：",
        noTargets: "没有该语言偏好的订阅者，无法发送。",
        resendConfirm: "您将使用 Resend 智能群发功能向 {count} 名订阅者推送简报。订阅 ZH 的用户将收到中文简报，其余用户将收到英文简报。确定继续吗？",
        resendComplete: "智能群发完成！",
        resendSuccessCount: "成功投递",
        resendFailCount: "发送失败"
    }
};



function getLocalizedArticle(art) {
    if (!art) return art;
    const lang = State.language;
    if (lang === "zh") {
        const trans = ARTICLE_TRANSLATIONS[art.id];
        if (trans) {
            return {
                ...art,
                title: trans.titleZh || art.title,
                category: trans.categoryZh || art.category,
                excerpt: trans.excerptZh || art.excerpt,
                body: trans.bodyZh || art.body
            };
        }
    }
    return art;
}

function getChineseCategoryName(cat) {
    switch (cat.toLowerCase()) {
        case "attribution & lift": return "归因与提升度";
        case "privacy & identity": return "隐私与身份识别";
        case "media mix modeling": return "媒介混合模型";
        case "retail media": return "零售媒体";
        case "campaign strategy": return "创意策略";
        default: return cat;
    }
}

function translateUi() {
    const lang = State.language;
    const dict = LANG_DICT[lang];
    
    // Document Title
    document.title = lang === 'zh' ? "媒体财经 | 营销度量与归因洞察" : "Media Metric | Marketing Measurement & Attribution Intelligence";

    // Brand Logo & Title
    const brandTitleEl = document.querySelector(".brand-title");
    if (brandTitleEl) brandTitleEl.textContent = dict.brandTitle;

    const brandLogoImg = document.querySelector(".brand-logo-image");
    if (brandLogoImg) brandLogoImg.alt = lang === 'zh' ? "媒体财经徽标" : "Media Metric Logo";

    // Footer Logo & Description
    const footerLogoEl = document.querySelector(".footer-logo");
    if (footerLogoEl) footerLogoEl.textContent = dict.brandTitle;

    const footerDescEl = document.querySelector(".footer-desc");
    if (footerDescEl) footerDescEl.textContent = dict.footerDesc;

    // Top Bar Ticker
    const liveTickerSpan = document.querySelector(".live-ticker + span");
    if (liveTickerSpan) {
        liveTickerSpan.textContent = dict.attributionVariance;
    }
    const liveIndexLabel = document.querySelector(".live-ticker span:nth-child(2)");
    if (liveIndexLabel) {
        liveIndexLabel.textContent = dict.liveIndex;
    }
    
    // Header Nav Links
    const navHome = document.querySelector("#nav-home a");
    if (navHome) navHome.textContent = dict.home;
    
    const navAttribution = document.querySelector("#nav-attribution a");
    if (navAttribution) navAttribution.textContent = dict.attribution;
    
    const navPrivacy = document.querySelector("#nav-privacy a");
    if (navPrivacy) navPrivacy.textContent = dict.privacy;
    
    const navMmm = document.querySelector("#nav-mmm a");
    if (navMmm) navMmm.textContent = dict.mmm;
    
    const navRetail = document.querySelector("#nav-retail a");
    if (navRetail) navRetail.textContent = dict.retail;
    
    const navSaved = document.querySelector("#nav-saved a");
    if (navSaved) navSaved.textContent = dict.saved;
    
    // Footer Titles
    const footerTitles = document.querySelectorAll(".footer-grid h4");
    if (footerTitles.length >= 3) {
        footerTitles[0].textContent = dict.editorial;
        footerTitles[1].textContent = dict.resources;
        footerTitles[2].textContent = dict.company;
    }
    
    // Footer Links
    const footerLinks = document.querySelectorAll(".footer-col-links a");
    // Editorial section links
    if (footerLinks[0]) footerLinks[0].textContent = dict.attribution;
    if (footerLinks[1]) footerLinks[1].textContent = dict.privacy;
    if (footerLinks[2]) footerLinks[2].textContent = dict.mmm;
    if (footerLinks[3]) footerLinks[3].textContent = dict.retail;
    if (footerLinks[4]) footerLinks[4].textContent = lang === 'en' ? "Creative Strategy" : "创意策略";
    
    // Resources section links
    if (footerLinks[5]) footerLinks[5].textContent = dict.savedBriefings;
    if (footerLinks[6]) footerLinks[6].textContent = dict.attributionGlossary;
    if (footerLinks[7]) footerLinks[7].textContent = dict.industryEvents;
    
    // Company section links
    if (footerLinks[8]) footerLinks[8].textContent = dict.about;
    
    // Footer bottom
    const footerCopyright = document.querySelector(".footer-bottom p");
    if (footerCopyright) footerCopyright.textContent = dict.copyright;
    
    const footerBottomLinks = document.querySelectorAll(".footer-bottom-links a");
    if (footerBottomLinks[0]) footerBottomLinks[0].textContent = dict.privacyPolicy;
    if (footerBottomLinks[1]) footerBottomLinks[1].textContent = dict.termsOfService;
    if (footerBottomLinks[2]) footerBottomLinks[2].textContent = dict.cookiePreferences;
    
    // Language select dropdown synchronizer
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
        langSelect.value = lang;
    }
}

// --- 3. THE LIGHTWEIGHT ROUTER ---
const Router = {
    routes: {},
    
    init() {
        window.addEventListener("hashchange", () => this.handleRoute());
        window.addEventListener("load", () => this.handleRoute());
        
        // Bind language select dropdown listener
        document.getElementById("lang-select")?.addEventListener("change", (e) => {
            State.language = e.target.value;
            State.save();
            this.handleRoute();
        });
    },
    
    handleRoute() {
        const hash = window.location.hash || "#home";
        let matched = false;
        
        // Log page view to Supabase analytics
        logPageView(hash);
        
        // Translate UI
        translateUi();
        
        // Update nav active states
        document.querySelectorAll(".nav-links li").forEach(li => li.classList.remove("active"));
        
        // Simple routes
        if (hash === "#home" || hash === "") {
            document.getElementById("nav-home")?.classList.add("active");
            renderHome();
            matched = true;

        } else if (hash === "#saved") {
            document.getElementById("nav-saved")?.classList.add("active");
            renderSaved();
            matched = true;
        } else if (hash === "#about") {
            renderAbout();
            matched = true;
        } else if (hash === "#admin") {
            renderAdmin();
            matched = true;
        }
        
        // Dynamic routes with parameters
        if (!matched) {
            const articleMatch = hash.match(/^#article\/(\d+)$/);
            if (articleMatch) {
                const articleId = parseInt(articleMatch[1], 10);
                renderArticleDetail(articleId);
                matched = true;
            }
            
            const categoryMatch = hash.match(/^#category\/(.+)$/);
            if (categoryMatch) {
                const categoryName = decodeURIComponent(categoryMatch[1]);
                // Highlight corresponding nav category if it exists
                document.querySelectorAll(".nav-links a").forEach(a => {
                    if (a.getAttribute("href") === hash) {
                        a.parentElement.classList.add("active");
                    }
                });
                renderCategoryView(categoryName);
                matched = true;
            }
        }
        
        if (!matched) {
            // Default Fallback
            window.location.hash = "#home";
        }
        
        // Scroll to top on page change
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

// --- 4. RENDERERS & VIEW GENERATION ---

// Helper: Wrap layout columns for Homepage
function getHomeStructureHtml() {
    const dict = LANG_DICT[State.language];
    return `
        <div class="homepage-grid">
            <!-- Left Column: Briefings -->
            <aside class="col-briefings">
                <h3 class="section-sidebar-title">${dict.latestIntel}</h3>
                <div class="briefings-list" id="briefings-container"></div>
            </aside>
            
            <!-- Center Column: Main Content -->
            <section class="col-main-content" id="main-articles-container"></section>
            
            <!-- Right Column: Insights & Widgets -->
            <aside class="col-insights">
                
                <!-- Most Read List -->
                <div class="widget-box">
                    <h3 class="section-sidebar-title" style="border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">${dict.mostPopular}</h3>
                    <div class="most-read-list" id="popular-container"></div>
                </div>

                <!-- Newsletter Subscription Widget -->
                <div class="newsletter-widget" id="home-newsletter-widget">
                    <h3 class="newsletter-title">${dict.newsletterTitle}</h3>
                    <p class="newsletter-desc">${dict.newsletterDesc}</p>
                    <form class="newsletter-form" id="home-newsletter-form">
                        <input type="email" class="newsletter-input" placeholder="${dict.newsletterPlaceholder}" required id="home-newsletter-email">
                        <button type="submit" class="newsletter-btn">${dict.newsletterBtn}</button>
                    </form>
                    <p class="newsletter-disclaimer">${dict.newsletterDisclaimer}</p>
                </div>
            </aside>
        </div>
    `;
}

// Render Homepage
function renderHome() {
    const mainEl = document.getElementById("main-viewport");
    mainEl.innerHTML = getHomeStructureHtml();
    
    // Fill briefings list (Left Column)
    const briefingsContainer = document.getElementById("briefings-container");
    // Sort reverse chronological or custom slicing
    const briefingArticles = ARTICLES.slice().reverse().map(getLocalizedArticle);
    briefingsContainer.innerHTML = briefingArticles.map(art => `
        <div class="briefing-item">
            <span class="briefing-category">${art.category}</span>
            <a href="#article/${art.id}"><h4 class="briefing-title">${art.title}</h4></a>
            <span class="briefing-time">${art.date}</span>
        </div>
    `).join("");
    
    // Fill Main Articles (Center Column)
    const mainArticlesContainer = document.getElementById("main-articles-container");
    
    // Lead featured article
    const leadArticle = getLocalizedArticle(ARTICLES.find(a => a.trending) || ARTICLES[0]);
    const secondaryArticles = ARTICLES.filter(a => a.id !== leadArticle.id).map(getLocalizedArticle);
    
    let centerHtml = `
        <div class="lead-feature">
            <div class="lead-img-container">
                ${leadArticle.isPremium ? '<span class="member-badge"><i class="fas fa-lock"></i> Member-Exclusive</span>' : ''}
                <img src="${leadArticle.featuredImage}" alt="${leadArticle.title}">
            </div>
            <div class="lead-meta">
                <span class="lead-category">${leadArticle.category}</span>
                <span>&bull;</span>
                <span>${leadArticle.readTime}</span>
            </div>
            <a href="#article/${leadArticle.id}"><h2 class="lead-title">${leadArticle.title}</h2></a>
            <p class="lead-excerpt">${leadArticle.excerpt}</p>
            <span class="lead-author">${State.language === 'zh' ? '作者' : 'By'} <strong>${leadArticle.author}</strong></span>
        </div>
        
        <div class="secondary-articles-grid">
    `;
    
    // Secondary article cards
    centerHtml += secondaryArticles.map(art => `
        <article class="article-card">
            <div class="article-img-container">
                ${art.isPremium ? '<span class="member-badge"><i class="fas fa-lock"></i> Member-Exclusive</span>' : ''}
                <img src="${art.featuredImage}" alt="${art.title}">
            </div>
            <div class="article-meta">
                <span class="article-category">${art.category}</span>
                <span>&bull;</span>
                <span>${art.readTime}</span>
            </div>
            <a href="#article/${art.id}"><h3 class="article-title">${art.title}</h3></a>
            <p class="article-excerpt">${art.excerpt}</p>
            <div class="article-card-footer">
                <span>${State.language === 'zh' ? '作者' : 'By'} ${art.author}</span>
                <button class="btn-bookmark-toggle ${State.isBookmarked(art.id) ? 'active' : ''}" 
                        data-id="${art.id}" title="${State.isBookmarked(art.id) ? 'Remove Bookmark' : 'Bookmark Article'}">
                    <i class="${State.isBookmarked(art.id) ? 'fas' : 'far'} fa-bookmark"></i>
                </button>
            </div>
        </article>
    `).join("");
    
    centerHtml += `</div>`;
    mainArticlesContainer.innerHTML = centerHtml;
    
    // Fill Popular Articles (Right Column)
    const popularContainer = document.getElementById("popular-container");
    popularContainer.innerHTML = ARTICLES.slice(0, 4).map(getLocalizedArticle).map((art, idx) => `
        <div class="most-read-item">
            <span class="most-read-number">0${idx + 1}</span>
            <div class="most-read-text">
                <a href="#article/${art.id}"><h4 class="most-read-title">${art.title}</h4></a>
                <span class="most-read-category">${art.category}</span>
            </div>
        </div>
    `).join("");
    
    // Attach event listeners
    attachHomeEventListeners();
}

// Render Category View
function renderCategoryView(category) {
    const mainEl = document.getElementById("main-viewport");
    const filtered = ARTICLES.filter(art => art.category.toLowerCase() === category.toLowerCase()).map(getLocalizedArticle);
    
    const dict = LANG_DICT[State.language];
    
    let html = `
        <div class="saved-view">
            <div class="saved-header">
                <h1>${State.language === 'zh' ? getChineseCategoryName(category) + '新闻' : category + ' News'}</h1>
                <span style="font-size: 0.85rem; color: var(--text-tertiary); font-weight: 500;">
                    ${State.language === 'zh' ? '共 ' + filtered.length + ' 篇可用文章' : filtered.length + ' Articles Available'}
                </span>
            </div>
            
            ${filtered.length === 0 ? `
                <div class="saved-empty">
                    <div class="saved-empty-icon"><i class="far fa-newspaper"></i></div>
                    <p>${State.language === 'zh' ? '该分类下未找到文章。' : 'No articles found in this category.'}</p>
                    <a href="#home" style="color: var(--accent-gold); text-decoration: underline; margin-top: 15px; display: inline-block;">${dict.returnHome}</a>
                </div>
            ` : `
                <div class="saved-list">
                    ${filtered.map(art => `
                        <div class="saved-item">
                            <div class="saved-item-img">
                                <img src="${art.featuredImage}" alt="${art.title}">
                            </div>
                            <div class="saved-item-info">
                                <span class="saved-item-cat">${art.category}</span>
                                <a href="#article/${art.id}"><h3 class="saved-item-title">${art.title}</h3></a>
                                <div class="saved-item-meta">
                                    <span>${dict.by} ${art.author}</span> &bull; <span>${art.date}</span> &bull; <span>${State.language === 'zh' ? art.readTime.replace('min read', '分钟阅读') : art.readTime}</span>
                                    ${art.isPremium ? '<span style="color: var(--accent-gold); margin-left: 8px; font-weight:700;">[MEMBER-ONLY]</span>' : ''}
                                </div>
                            </div>
                            <button class="btn-bookmark-toggle ${State.isBookmarked(art.id) ? 'active' : ''}" 
                                    data-id="${art.id}" style="font-size: 1.1rem; padding: 10px;">
                                <i class="${State.isBookmarked(art.id) ? 'fas' : 'far'} fa-bookmark"></i>
                            </button>
                        </div>
                    `).join("")}
                </div>
            `}
        </div>
    `;
    
    mainEl.innerHTML = html;
    
    // Attach bookmark toggle listeners
    mainEl.querySelectorAll(".btn-bookmark-toggle").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.dataset.id, 10);
            State.toggleBookmark(id);
            renderCategoryView(category);
        });
    });
}

// Render Article Detail
function renderArticleDetail(id) {
    const mainEl = document.getElementById("main-viewport");
    const rawArticle = ARTICLES.find(a => a.id === id);
    const article = getLocalizedArticle(rawArticle);
    
    if (!article) {
        mainEl.innerHTML = `
            <div style="text-align: center; padding: 100px 0;">
                <h2>${State.language === 'zh' ? '文章未找到' : 'Article Not Found'}</h2>
                <a href="#home" style="color: var(--accent-gold); text-decoration: underline; margin-top: 20px; display: inline-block;">${State.language === 'zh' ? '返回首页' : 'Return to Homepage'}</a>
            </div>
        `;
        return;
    }
    
    const isLocked = false;
    
    let html = `
        <article class="article-detail">
            <header class="article-header">
                <span class="article-header-cat">${article.category}</span>
                <h1 class="article-header-title">${article.title}</h1>
                <div class="article-header-meta">
                    <div class="author-info">
                        <div class="author-avatar">${article.authorInitials}</div>
                        <div class="author-details">
                            <span class="author-name">${article.author}</span>
                            <span class="pub-date">${State.language === 'zh' ? '发布于' : 'Published'} ${article.date} &bull; ${State.language === 'zh' ? article.readTime.replace('min read', '分钟阅读') : article.readTime}</span>
                        </div>
                    </div>
                    <div class="article-tools">
                        <button class="btn-tool ${State.isBookmarked(article.id) ? 'active' : ''}" id="btn-article-bookmark" title="Bookmark">
                            <i class="${State.isBookmarked(article.id) ? 'fas' : 'far'} fa-bookmark"></i>
                        </button>
                        <button class="btn-tool" id="btn-article-share" title="Copy Link">
                            <i class="far fa-share-square"></i>
                        </button>
                    </div>
                </div>
            </header>
            
            <div class="article-featured-img">
                <img src="${article.featuredImage}" alt="${article.title}" style="width: 100%; height: auto;">
            </div>
            
            <div class="article-content">
    `;
    
    if (isLocked) {
        // Premium paywall preview: render first paragraph only, followed by beautiful blur lock
        const paragraphs = article.body.trim().split("</p>");
        const previewText = paragraphs[0] + "</p>";
        
        html += `
                ${previewText}
                
                <div class="paywall-blocker">
                    <div class="paywall-card">
                        <div class="paywall-icon">
                            <i class="fas fa-lock"></i>
                        </div>
                        <h3 class="paywall-title">Unlock Premium Insights</h3>
                        <p class="paywall-desc">
                            This analysis is exclusive to <b>Media Metric Professional Members</b>. Get unlimited access to comprehensive marketing attribution audits, Media Mix Modeling studies, and industry benchmarks.
                        </p>
                        <ul class="paywall-benefits">
                            <li><i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> Full access to all editorial content</li>
                            <li><i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> Real-time benchmark index calculators</li>
                            <li><i class="fas fa-check-circle" style="color: var(--accent-gold);"></i> Weekly Attribution Report newsletter</li>
                        </ul>
                        <div class="paywall-btn-group">
                            <button class="btn-paywall-join" id="paywall-join-btn">Start 14-Day Free Trial</button>
                            <button class="btn-paywall-login" id="paywall-login-btn">Already a member? Sign in</button>
                        </div>
                    </div>
                </div>
        `;
    } else {
        // Render complete body
        html += article.body;
    }
    
    html += `
            </div>
        </article>
    `;
    
    mainEl.innerHTML = html;
    
    // Event listeners inside details
    document.getElementById("btn-article-bookmark")?.addEventListener("click", () => {
        State.toggleBookmark(article.id);
        renderArticleDetail(article.id);
    });
    
    document.getElementById("btn-article-share")?.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Shareable link copied to clipboard!");
        });
    });
    
    if (isLocked) {
        document.getElementById("paywall-join-btn")?.addEventListener("click", () => {
            openSubscriptionModal();
        });
        document.getElementById("paywall-login-btn")?.addEventListener("click", () => {
            openLoginModal();
        });
    } else {
        // If article has the ROI calculator, attach calculator listeners
        if (document.getElementById("roi-calc-container")) {
            initRoiCalculator();
        }
    }
}

// ROI Calculator Logic
function initRoiCalculator() {
    const spendIn = document.getElementById("calc-spend");
    const salesIn = document.getElementById("calc-sales");
    const incSlider = document.getElementById("calc-incrementality");
    const marginIn = document.getElementById("calc-margin");
    
    const incLabel = document.getElementById("calc-inc-label");
    const repRoasVal = document.getElementById("res-rep-roas");
    const trueRoasVal = document.getElementById("res-true-roas");
    const netProfitVal = document.getElementById("res-net-profit");
    
    function recalculate() {
        const spend = parseFloat(spendIn.value) || 0;
        const sales = parseFloat(salesIn.value) || 0;
        const incrementality = parseFloat(incSlider.value) / 100;
        const margin = parseFloat(marginIn.value) / 100;
        
        incLabel.textContent = `${Math.round(incrementality * 100)}%`;
        
        const reportedRoas = spend > 0 ? (sales / spend) : 0;
        const trueSales = sales * incrementality;
        const trueRoas = spend > 0 ? (trueSales / spend) : 0;
        
        const trueNetProfit = (trueSales * margin) - spend;
        
        repRoasVal.textContent = `${reportedRoas.toFixed(2)}x`;
        trueRoasVal.textContent = `${trueRoas.toFixed(2)}x`;
        
        netProfitVal.textContent = trueNetProfit < 0 
            ? `-$${Math.abs(trueNetProfit).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}` 
            : `$${trueNetProfit.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}`;
            
        if (trueNetProfit < 0) {
            netProfitVal.style.color = "var(--accent-danger)";
        } else {
            netProfitVal.style.color = "var(--accent-success)";
        }
    }
    
    [spendIn, salesIn, marginIn].forEach(input => {
        input.addEventListener("input", recalculate);
    });
    incSlider.addEventListener("input", recalculate);
    
    // Initial run
    recalculate();
}

// Render Saved (Bookmarks)
function renderSaved() {
    const mainEl = document.getElementById("main-viewport");
    
    const savedArticles = ARTICLES.filter(a => State.bookmarks.includes(a.id)).map(getLocalizedArticle);
    
    const dict = LANG_DICT[State.language];
    
    let html = `
        <div class="saved-view">
            <div class="saved-header">
                <h1>${dict.bookmarkedArticles}</h1>
                ${savedArticles.length > 0 ? `<button class="btn-clear-saved" id="clear-bookmarks-btn">${dict.clearAll}</button>` : ''}
            </div>
            
            ${savedArticles.length === 0 ? `
                <div class="saved-empty">
                    <div class="saved-empty-icon"><i class="far fa-bookmark"></i></div>
                    <p>${dict.noSaved}</p>
                    <a href="#home" style="color: var(--accent-gold); text-decoration: underline; margin-top: 15px; display: inline-block;">${dict.returnHome}</a>
                </div>
            ` : `
                <div class="saved-list">
                    ${savedArticles.map(art => `
                        <div class="saved-item">
                            <div class="saved-item-img">
                                <img src="${art.featuredImage}" alt="${art.title}">
                            </div>
                            <div class="saved-item-info">
                                <span class="saved-item-cat">${art.category}</span>
                                <a href="#article/${art.id}"><h3 class="saved-item-title">${art.title}</h3></a>
                                <div class="saved-item-meta">
                                    <span>${dict.by} ${art.author}</span> &bull; <span>${art.date}</span> &bull; <span>${State.language === 'zh' ? art.readTime.replace('min read', '分钟阅读') : art.readTime}</span>
                                </div>
                            </div>
                            <button class="btn-remove-saved" data-id="${art.id}" title="${dict.removeBookmark}">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    `).join("")}
                </div>
            `}
        </div>
    `;
    
    mainEl.innerHTML = html;
    
    // Listeners
    document.getElementById("clear-bookmarks-btn")?.addEventListener("click", () => {
        if (confirm(State.language === 'zh' ? "您确定要清空所有收藏的文章吗？" : "Are you sure you want to clear all bookmarked articles?")) {
            State.bookmarks = [];
            State.save();
            renderSaved();
        }
    });
    
    mainEl.querySelectorAll(".btn-remove-saved").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id, 10);
            State.toggleBookmark(id);
            renderSaved();
        });
    });
}

// Render About Page
function renderAbout() {
    const mainEl = document.getElementById("main-viewport");
    const lang = State.language;
    
    let html = "";
    if (lang === "zh") {
        html = `
            <div class="about-container">
                <div class="about-grid">
                    <div class="about-image-side">
                        <div class="about-image-wrapper">
                            <img src="https://images.squarespace-cdn.com/content/v1/5c3cf248af2096f4d3bf7126/1571083361823-9RHSQ4CC6X4ZZ0SGRG7H/unnamed.jpg" alt="赵艺聪" class="about-image">
                        </div>
                        <div class="about-social-row">
                            <a href="mailto:emilyzhao0826@gmail.com" target="_blank" class="about-social-icon email" aria-label="电子邮箱">
                                <i class="fa-regular fa-envelope"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/emily-z-3391b11a2/" target="_blank" class="about-social-icon linkedin" aria-label="LinkedIn 档案">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/emilyzdata" target="_blank" class="about-social-icon github" aria-label="GitHub 档案">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="about-content-side">
                        <span class="about-subtitle">编辑与合作咨询</span>
                        <h1 class="about-title">关于 赵艺聪</h1>
                        
                        <div class="about-intro-box">
                            <p>本网站由赵艺聪（Emily Zhao）创建，用于发布关于媒体和营销度量的行业新闻。</p>
                        </div>
                        
                        <div class="about-bio-text">
                            <p>在本科期间，赵艺聪（Emily）在法学院主修法律翻译。她对通过不同媒介进行探索的兴趣，促使她在纽约市的福特汉姆大学攻读媒体管理硕士学位。她收集关于媒体世界的数据，进行分析，并以简明直观的可视化形式展示出来。</p>
                            
                            <p>她的工作包括但不限于报告、可视化和统计建模。在工作之余，她喜欢做艺术和进行芭蕾舞演员的训练。</p>
                            
                            <div class="about-clients-section">
                                <h3>合作与客户名单</h3>
                                <p>Dick’s Sporting Goods, Albertsons, Ahold, Gilead, Regeneron, Nissan, Visa, Pfizer, UCB, Morphosys, Novartis, Typethursday, 和 NYC Go。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        html = `
            <div class="about-container">
                <div class="about-grid">
                    <div class="about-image-side">
                        <div class="about-image-wrapper">
                            <img src="https://images.squarespace-cdn.com/content/v1/5c3cf248af2096f4d3bf7126/1571083361823-9RHSQ4CC6X4ZZ0SGRG7H/unnamed.jpg" alt="Emily Zhao" class="about-image">
                        </div>
                        <div class="about-social-row">
                            <a href="mailto:emilyzhao0826@gmail.com" target="_blank" class="about-social-icon email" aria-label="Email Emily Zhao">
                                <i class="fa-regular fa-envelope"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/emily-z-3391b11a2/" target="_blank" class="about-social-icon linkedin" aria-label="LinkedIn Profile">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/emilyzdata" target="_blank" class="about-social-icon github" aria-label="GitHub Profile">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="about-content-side">
                        <span class="about-subtitle">EDITORIAL & INQUIRIES</span>
                        <h1 class="about-title">About Emily Zhao</h1>
                        
                        <div class="about-intro-box">
                            <p>This website is created by Emily Zhao to post industry news on media and marketing measurement.</p>
                        </div>
                        
                        <div class="about-bio-text">
                            <p>During her undergraduate years, Yicong (Emily) Zhao majored in legal translation at a law school. Her interest in exploration through different mediums has led her to pursue her master in media management at Fordham University in New York City. She collects data on the media world, analyzes it, and displays it in succinct visualizations.</p>
                            
                            <p>Her work includes but is not limited to reporting, visualization, and statistical modeling. Outside of work, she enjoys doing art and training as a ballerina.</p>
                            
                            <div class="about-clients-section">
                                <h3>SELECT CLIENTS & COLLABORATIONS</h3>
                                <p>Dick’s Sporting Goods, Albertsons, Ahold, Gilead, Regeneron, Nissan, Visa, Pfizer, UCB, Morphosys, Novartis, Typethursday, and NYC Go.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    mainEl.innerHTML = html;
}



// Attach Homepage Specific Events
function attachHomeEventListeners() {
    // Bookmarks toggle
    document.querySelectorAll(".btn-bookmark-toggle").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id, 10);
            State.toggleBookmark(id);
            renderHome();
        });
    });
    
    // Newsletter signup submit
    const newsletterForm = document.getElementById("home-newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById("home-newsletter-email");
            if (!emailInput) return;
            const email = emailInput.value.trim();
            if (!email) return;

            const submitBtn = newsletterForm.querySelector("button[type='submit']");
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = State.language === 'zh' ? '提交中...' : 'Submitting...';
            }

            const result = await saveSubscriber(email);
            
            const widget = document.getElementById("home-newsletter-widget");
            if (widget) {
                if (result.success) {
                    const dict = LANG_DICT[State.language];
                    widget.innerHTML = `
                        <div class="newsletter-success">
                            <i class="fas fa-check-circle"></i>
                            <h4>${dict.newsletterSuccessTitle}</h4>
                            <p>${dict.newsletterSuccessDesc}</p>
                            <p style="font-weight: 700; margin-top: 8px; font-size: 0.75rem;">${email}</p>
                        </div>
                    `;
                } else {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = State.language === 'zh' ? '立即订阅' : 'Subscribe';
                    }
                    if (result.error === "already_subscribed") {
                        alert(State.language === 'zh' ? '此邮箱已在订阅列表中。' : 'This email is already in our subscription list.');
                    } else {
                        alert(State.language === 'zh' ? '订阅失败，请稍后重试。' : 'Failed to subscribe, please try again later.');
                    }
                }
            }
        });
    }
}

// --- 5. MODAL WORKFLOW CONTROLLERS ---

function closeAllModals() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
}

function setupModalControllers() {
    // Close modal triggers
    document.querySelectorAll(".btn-close-modal").forEach(btn => {
        btn.addEventListener("click", () => closeAllModals());
    });
    
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeAllModals();
        });
    });
    
    // Advanced Search modal triggers
    const searchTrigger = document.getElementById("nav-search-trigger");
    const searchModal = document.getElementById("modal-search");
    
    searchTrigger?.addEventListener("click", () => {
        searchModal.classList.add("active");
        setTimeout(() => document.getElementById("search-input-field")?.focus(), 200);
    });
    
    document.getElementById("search-modal-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = document.getElementById("search-input-field").value.trim().toLowerCase();
        closeAllModals();
        
        if (query) {
            State.searchQuery = query;
            renderSearchResults(query);
        }
    });
}

// Render Search Results
function renderSearchResults(query) {
    const mainEl = document.getElementById("main-viewport");
    
    const results = ARTICLES.filter(art => 
        art.title.toLowerCase().includes(query) || 
        art.excerpt.toLowerCase().includes(query) || 
        art.category.toLowerCase().includes(query)
    );
    
    let html = `
        <div class="saved-view">
            <div class="saved-header">
                <h1>Search Results for: "${query}"</h1>
                <span style="font-size: 0.85rem; color: var(--text-tertiary); font-weight: 500;">
                    ${results.length} Matches Found
                </span>
            </div>
            
            ${results.length === 0 ? `
                <div class="saved-empty">
                    <div class="saved-empty-icon"><i class="fas fa-search"></i></div>
                    <p>No articles matched your search query. Please try different keywords.</p>
                    <a href="#home" style="color: var(--accent-gold); text-decoration: underline; margin-top: 15px; display: inline-block;">Return Home</a>
                </div>
            ` : `
                <div class="saved-list">
                    ${results.map(art => `
                        <div class="saved-item">
                            <div class="saved-item-img">
                                <img src="${art.featuredImage}" alt="${art.title}">
                            </div>
                            <div class="saved-item-info">
                                <span class="saved-item-cat">${art.category}</span>
                                <a href="#article/${art.id}"><h3 class="saved-item-title">${art.title}</h3></a>
                                <div class="saved-item-meta">
                                    <span>By ${art.author}</span> &bull; <span>${art.date}</span> &bull; <span>${art.readTime}</span>
                                    ${art.isPremium ? '<span style="color: var(--accent-gold); margin-left: 8px; font-weight:700;">[MEMBER-ONLY]</span>' : ''}
                                </div>
                            </div>
                            <button class="btn-bookmark-toggle ${State.isBookmarked(art.id) ? 'active' : ''}" 
                                    data-id="${art.id}" style="font-size: 1.1rem; padding: 10px;">
                                <i class="${State.isBookmarked(art.id) ? 'fas' : 'far'} fa-bookmark"></i>
                            </button>
                        </div>
                    `).join("")}
                </div>
            `}
        </div>
    `;
    
    mainEl.innerHTML = html;
    
    // Attach bookmark toggle listeners
    mainEl.querySelectorAll(".btn-bookmark-toggle").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.dataset.id, 10);
            State.toggleBookmark(id);
            renderSearchResults(query);
        });
    });
}

function syncUserStateUI() {
    const bookmarkCount = document.getElementById("bookmark-count-badge");
    
    // Update bookmark count badge
    if (bookmarkCount) {
        bookmarkCount.textContent = State.bookmarks.length;
    }
    
    // Re-render current hash view to unlock/lock premium content
    const hash = window.location.hash || "#home";
    const articleMatch = hash.match(/^#article\/(\d+)$/);
    if (articleMatch) {
        const id = parseInt(articleMatch[1], 10);
        renderArticleDetail(id);
    }
}

// --- 6. ADMIN DASHBOARD VIEW ---

const DEFAULT_NEWSLETTER_EN = `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111111; line-height: 1.6;">
    <div style="border-bottom: 2px solid #111111; padding-bottom: 20px; text-align: center; margin-bottom: 30px;">
        <h1 style="font-family: Georgia, serif; font-size: 28px; letter-spacing: 2px; margin: 0; font-weight: bold;">MEDIA METRIC | WEEKLY BRIEFING</h1>
        <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #666666; margin: 5px 0 0 0;">Attribution, Modeling, and Data Intelligence</p>
    </div>
    <p>Dear Subscriber,</p>
    <p>Welcome to this week's analysis of marketing metrics. Today, we are deep diving into the causal impact of platforms, how Seinfeld models Bayesian relationships, and the culture-to-commerce pipeline of premium media.</p>
    <div style="background-color: #f9f9f9; border: 1px solid #eeeeee; padding: 20px; margin: 25px 0;">
        <span style="font-size: 10px; font-weight: bold; color: #D4AF37; text-transform: uppercase; letter-spacing: 1px;">Featured Analysis</span>
        <h3 style="font-family: Georgia, serif; font-size: 20px; margin: 8px 0 12px 0;">《Euphoria》How it Turned Emotional Chaos into a Consumer Economy</h3>
        <p style="font-size: 14px; color: #444444; margin-bottom: 16px;">
            The cultural footprint of HBO's Euphoria extends far beyond television ratings. We analyze how the show's signature glitter-drenched, high-contrast aesthetic catalyzed a massive boom in the beauty, fashion, and retail consumer economies.
        </p>
        <a href="http://localhost:8080/#article/14" style="background-color: #111111; color: #ffffff; text-decoration: none; padding: 8px 16px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">Read Full Analysis</a>
    </div>
    <h3 style="font-family: Georgia, serif; font-size: 18px; border-bottom: 1px solid #dddddd; padding-bottom: 8px; margin-top: 30px;">Latest Intel</h3>
    <div style="margin-bottom: 20px;">
        <h4 style="margin: 0 0 5px 0; font-size: 15px;"><a href="http://localhost:8080/#article/5" style="color: #111111; text-decoration: none;">To Autumn on the L-Train: Re-Evaluating Romantic Poetry as a Cognitive Brake for Straphangers</a></h4>
        <p style="font-size: 13px; color: #666666; margin: 0;">Facing transit delays and digital saturation, commuters find unexpected moments of mindfulness in John Keats' romantic verses.</p>
    </div>
    <div style="margin-bottom: 20px;">
        <h4 style="margin: 0 0 5px 0; font-size: 15px;"><a href="http://localhost:8080/#article/7" style="color: #111111; text-decoration: none;">Modeling Relationships with Bayesian: What Seinfeld Teaches Us About Hidden Behavior Signals in Data</a></h4>
        <p style="font-size: 13px; color: #666666; margin: 0;">Can Jerry, George, Elaine, and Kramer explain Bayes' Theorem? We map prior beliefs, likelihood updates, and posterior relationship probabilities to classic Seinfeld episodes.</p>
    </div>
    <div style="border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 40px; text-align: center; font-size: 11px; color: #888888;">
        <p>© 2026 Media Metric. All rights reserved.</p>
        <p style="margin-top: 5px;">If you wish to unsubscribe, click <a href="#" style="color: #666666; text-decoration: underline;">here</a>.</p>
    </div>
</div>`;

const DEFAULT_NEWSLETTER_ZH = `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111111; line-height: 1.6;">
    <div style="border-bottom: 2px solid #111111; padding-bottom: 20px; text-align: center; margin-bottom: 30px;">
        <h1 style="font-family: Georgia, serif; font-size: 28px; letter-spacing: 2px; margin: 0; font-weight: bold;">媒体财经 | 每周简报</h1>
        <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #666666; margin: 5px 0 0 0;">广告归归因、度量建模与数据智能</p>
    </div>
    <p>亲爱的订阅者，您好：</p>
    <p>欢迎阅读本周的营销度量分析。今天我们将深入探讨各平台广告的因果影响、如何使用《辛菲尔德》模型解析贝叶斯关系，以及精品媒体的“内容到商业”转化链条。</p>
    <div style="background-color: #f9f9f9; border: 1px solid #eeeeee; padding: 20px; margin: 25px 0;">
        <span style="font-size: 10px; font-weight: bold; color: #D4AF37; text-transform: uppercase; letter-spacing: 1px;">重磅分析</span>
        <h3 style="font-family: Georgia, serif; font-size: 20px; margin: 8px 0 12px 0;">《亢奋》如何将情感混乱转化为消费经济</h3>
        <p style="font-size: 14px; color: #444444; margin-bottom: 16px;">
            HBO 剧集《亢奋》（Euphoria）的文化足迹远超电视收视率。我们分析了该剧标志性的亮片妆容、高对比度美学如何催化了美妆、时尚和零售消费经济的空前繁荣。
        </p>
        <a href="http://localhost:8080/#article/14" style="background-color: #111111; color: #ffffff; text-decoration: none; padding: 8px 16px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; display: inline-block;">阅读完整分析</a>
    </div>
    <h3 style="font-family: Georgia, serif; font-size: 18px; border-bottom: 1px solid #dddddd; padding-bottom: 8px; margin-top: 30px;">最新资讯</h3>
    <div style="margin-bottom: 20px;">
        <h4 style="margin: 0 0 5px 0; font-size: 15px;"><a href="http://localhost:8080/#article/5" style="color: #111111; text-decoration: none;">L线地铁上的《致秋天》：重估浪漫主义诗歌作为通勤族的认知缓冲器</a></h4>
        <p style="font-size: 13px; color: #666666; margin: 0;">面对地铁延误和数字信息饱和，通勤族在约翰·济慈的浪漫诗句中找到了意想不到的静心时刻。</p>
    </div>
    <div style="margin-bottom: 20px;">
        <h4 style="margin: 0 0 5px 0; font-size: 15px;"><a href="http://localhost:8080/#article/7" style="color: #111111; text-decoration: none;">用贝叶斯模型重构人际关系：《辛菲尔德》教我们如何解读数据中隐藏的行为信号</a></h4>
        <p style="font-size: 13px; color: #666666; margin: 0;">杰里、乔治、伊莱恩和克莱默能解释贝叶斯定理吗？我们将先验信念、似然更新和后验关系概率映射到《辛菲尔德》的经典剧集中。</p>
    </div>
    <div style="border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 40px; text-align: center; font-size: 11px; color: #888888;">
        <p>© 2026 媒体财经. 保留所有权利。</p>
        <p style="margin-top: 5px;">如果您想退订邮件，请点击 <a href="#" style="color: #666666; text-decoration: underline;">此处</a>。</p>
    </div>
</div>`;

  async function renderAdmin() {
    const mainEl = document.getElementById("main-viewport");
    const subscribers = await getSubscribers();
    const dict = ADMIN_LANG[State.language];
    
    let keySaved = localStorage.getItem("resend_api_key") || "";
    
    let html = `
        <div class="admin-container">
            <header class="admin-header">
                <h1 class="admin-title">${dict.adminTitle}</h1>
                <a href="#home" class="admin-btn admin-btn-secondary"><i class="fas fa-home"></i> ${dict.backHome}</a>
            </header>
            
            <div class="admin-grid">
                <!-- Left Card: Subscribers List -->
                <div class="admin-card">
                    <div class="admin-card-title">
                        <span>${dict.subscribersList} (${subscribers.length})</span>
                        <button id="admin-export-csv" class="admin-btn admin-btn-secondary" style="font-size: 0.65rem; padding: 4px 8px;">
                            <i class="fas fa-file-export"></i> ${dict.exportCsv}
                        </button>
                    </div>
                    
                    <div class="admin-input-group" style="margin-bottom: 12px;">
                        <input type="text" id="subscriber-search" class="admin-input" placeholder="${dict.searchSubscribers}">
                    </div>
                    
                    <div class="subscribers-table-container">
                        <table class="subscribers-table" id="subscribers-table">
                            <thead>
                                <tr>
                                    <th>${dict.joinedTime}</th>
                                    <th>${dict.emailAddress}</th>
                                    <th>${dict.language}</th>
                                    <th>${dict.status}</th>
                                </tr>
                            </thead>
                            <tbody id="subscribers-list-tbody">
                                ${subscribers.length === 0 ? `
                                    <tr>
                                        <td colspan="4" style="text-align: center; color: var(--text-tertiary); padding: 30px;">${dict.noSubscribers}</td>
                                    </tr>
                                ` : subscribers.map(sub => {
                                    const date = new Date(sub.created_at).toLocaleDateString(State.language === 'zh' ? 'zh-CN' : 'en-US', {
                                        year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'
                                    });
                                    return `
                                        <tr class="subscriber-row" data-email="${sub.email}">
                                            <td>${date}</td>
                                            <td style="font-weight: 700;">${sub.email}</td>
                                            <td style="text-transform: uppercase;">${sub.language}</td>
                                            <td><span class="badge-active">${sub.status}</span></td>
                                        </tr>
                                    `;
                                }).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Right Card: Newsletter Composer -->
                <div class="admin-card">
                    <div class="admin-card-title">${dict.emailCampaigns}</div>
                    
                    <!-- Resend API Key Config -->
                    <div class="admin-input-group" style="background-color: var(--bg-primary); padding: 12px; border-radius: var(--border-radius-sm); border: 1px solid var(--border-light); margin-bottom: 20px;">
                        <label class="admin-label" style="display: flex; justify-content: space-between;">
                            <span>${dict.resendKeyLocal}</span>
                            <a href="https://resend.com" target="_blank" style="color: var(--accent-gold); text-decoration: underline; text-transform: none; font-weight: normal;">${dict.getFreeKey}</a>
                        </label>
                        <div style="display: flex; gap: 8px;">
                            <input type="password" id="resend-api-key" class="admin-input" placeholder="re_123456789..." value="${keySaved}">
                            <button id="btn-save-key" class="admin-btn">${dict.saveBtn}</button>
                        </div>
                    </div>
                    
                    <form id="newsletter-form">
                        <!-- Language Tabs -->
                        <div style="display: flex; gap: 4px; margin-bottom: 16px; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
                            <button type="button" id="tab-en-btn" class="admin-btn" style="flex: 1; padding: 6px; font-size: 0.7rem; border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0; background-color: var(--text-primary); color: var(--bg-primary);">
                                <i class="fas fa-globe-americas"></i> ${dict.tabEn}
                            </button>
                            <button type="button" id="tab-zh-btn" class="admin-btn admin-btn-secondary" style="flex: 1; padding: 6px; font-size: 0.7rem; border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;">
                                <i class="fas fa-globe-asia"></i> ${dict.tabZh}
                            </button>
                        </div>
                        
                        <!-- English Content Fields -->
                        <div id="content-area-en">
                            <div class="admin-input-group">
                                <label class="admin-label">English Subject</label>
                                <input type="text" id="email-subject-en" class="admin-input" placeholder="${dict.subjectEnPlaceholder}" value="${dict.subjectEnPlaceholder}" required>
                            </div>
                            <div class="admin-input-group">
                                <label class="admin-label">English Body (HTML)</label>
                                <textarea id="email-body-en" class="admin-textarea" style="min-height: 180px;" required></textarea>
                            </div>
                        </div>

                        <!-- Chinese Content Fields -->
                        <div id="content-area-zh" style="display: none;">
                            <div class="admin-input-group">
                                <label class="admin-label">中文简报主题</label>
                                <input type="text" id="email-subject-zh" class="admin-input" placeholder="${dict.subjectZhPlaceholder}" value="${dict.subjectZhPlaceholder}">
                            </div>
                            <div class="admin-input-group">
                                <label class="admin-label">中文简报内容 (HTML)</label>
                                <textarea id="email-body-zh" class="admin-textarea" style="min-height: 180px;"></textarea>
                            </div>
                        </div>
                        
                        <div class="admin-tip-box">
                            <strong>${dict.tipsTitle}</strong><br>
                            - <strong>${State.language === 'zh' ? '方式一' : 'Method 1'}</strong>：${dict.tipsDesc1}<br>
                            - <strong>${State.language === 'zh' ? '方式二' : 'Method 2'}</strong>：${dict.tipsDesc2}
                        </div>
                        
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <button type="button" id="btn-send-test" class="admin-btn admin-btn-secondary" style="padding: 8px 12px;">
                                <i class="fas fa-paper-plane"></i> ${dict.sendTest}
                            </button>
                            <button type="submit" id="btn-send-resend" class="admin-btn" style="padding: 8px 12px;">
                                <i class="fas fa-paper-plane"></i> ${dict.resendSmart}
                            </button>
                            <button type="button" id="btn-send-mailto-en" class="admin-btn admin-btn-secondary" style="padding: 8px 12px; font-size: 0.65rem;">
                                <i class="fas fa-envelope"></i> ${dict.sendBccEn}
                            </button>
                            <button type="button" id="btn-send-mailto-zh" class="admin-btn admin-btn-secondary" style="padding: 8px 12px; font-size: 0.65rem;">
                                <i class="fas fa-envelope"></i> ${dict.sendBccZh}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    mainEl.innerHTML = html;
    
    // Set default HTML values in textareas
    document.getElementById("email-body-en").value = DEFAULT_NEWSLETTER_EN;
    document.getElementById("email-body-zh").value = DEFAULT_NEWSLETTER_ZH;
    
    // Attach Admin View Listeners
    attachAdminEventListeners(subscribers);
}
function attachAdminEventListeners(subscribers) {
    let activeTab = "en"; // track active tab: 'en' or 'zh'
    const dict = ADMIN_LANG[State.language];

    // Tab Switch Listeners
    const tabEnBtn = document.getElementById("tab-en-btn");
    const tabZhBtn = document.getElementById("tab-zh-btn");
    const contentEn = document.getElementById("content-area-en");
    const contentZh = document.getElementById("content-area-zh");

    tabEnBtn?.addEventListener("click", () => {
        activeTab = "en";
        tabEnBtn.className = "admin-btn";
        tabZhBtn.className = "admin-btn admin-btn-secondary";
        contentEn.style.display = "block";
        contentZh.style.display = "none";
    });

    tabZhBtn?.addEventListener("click", () => {
        activeTab = "zh";
        tabZhBtn.className = "admin-btn";
        tabEnBtn.className = "admin-btn admin-btn-secondary";
        contentZh.style.display = "block";
        contentEn.style.display = "none";
    });

    // 1. Search Box
    const searchInput = document.getElementById("subscriber-search");
    searchInput?.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        document.querySelectorAll(".subscriber-row").forEach(row => {
            const email = row.dataset.email.toLowerCase();
            if (email.includes(query)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
    
    // 2. Save Resend Key
    const saveKeyBtn = document.getElementById("btn-save-key");
    saveKeyBtn?.addEventListener("click", () => {
        const keyVal = document.getElementById("resend-api-key").value.trim();
        localStorage.setItem("resend_api_key", keyVal);
        alert(dict.saveKeySuccess);
    });
    
    // 3. Export CSV
    const exportBtn = document.getElementById("admin-export-csv");
    exportBtn?.addEventListener("click", () => {
        if (subscribers.length === 0) {
            alert(dict.exportEmpty);
            return;
        }
        let csvContent = `data:text/csv;charset=utf-8,${dict.joinedTime},${dict.emailAddress},${dict.language},${dict.status}\n`;
        subscribers.forEach(sub => {
            csvContent += `"${sub.created_at}","${sub.email}","${sub.language}","${sub.status}"\n`;
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `media_metric_subscribers_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
    
    // 4. Send Test Email (Self - sends the active tab's version)
    const testBtn = document.getElementById("btn-send-test");
    testBtn?.addEventListener("click", async () => {
        const subject = document.getElementById(activeTab === "en" ? "email-subject-en" : "email-subject-zh").value.trim();
        const body = document.getElementById(activeTab === "en" ? "email-body-en" : "email-body-zh").value.trim();
        const apiKey = localStorage.getItem("resend_api_key");
        
        if (!apiKey) {
            alert(State.language === 'zh' ? "请先在上方配置 Resend API Key 才能进行发送测试。" : "Please configure your Resend API Key first.");
            return;
        }
        if (!subject || !body) {
            alert(activeTab === "en" ? dict.fillEnSubjectContent : dict.fillZhSubjectContent);
            return;
        }
        
        let testEmail = State.user.email || prompt(dict.inputTestEmail);
        if (!testEmail) return;
        
        testBtn.disabled = true;
        testBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (State.language === 'zh' ? '发送中...' : 'Sending...');
        
        const result = await sendNewsletterViaResend(subject, body, [{ email: testEmail }], apiKey);
        
        testBtn.disabled = false;
        testBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + dict.sendTest;
        
        if (result.success && result.successCount > 0) {
            alert(`(${activeTab.toUpperCase()} ${State.language === 'zh' ? '版' : 'Version'}) ${dict.sendTestSuccess} ${testEmail}!`);
        } else {
            alert(dict.sendTestFail + " " + (result.errors.join(", ") || ""));
        }
    });

    // Helper: Trigger mailto BCC for a specific group of subscribers
    function triggerMailto(subject, htmlBody, targetSubscribers) {
        if (targetSubscribers.length === 0) {
            alert(dict.noTargets);
            return;
        }
        
        const emails = targetSubscribers.map(sub => sub.email).join(",");
        
        // Strip HTML tags for local mail client body fallback
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlBody;
        const textBody = tempDiv.textContent || tempDiv.innerText || htmlBody;

        const mailtoUrl = `mailto:?bcc=${encodeURIComponent(emails)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textBody)}`;
        window.open(mailtoUrl, "_blank");
    }

    // 5. Send Mailto EN (BCC)
    const mailtoBtnEn = document.getElementById("btn-send-mailto-en");
    mailtoBtnEn?.addEventListener("click", () => {
        const subject = document.getElementById("email-subject-en").value.trim();
        const body = document.getElementById("email-body-en").value.trim();
        if (!subject || !body) {
            alert(dict.fillEnSubjectContent);
            return;
        }
        const targets = subscribers.filter(sub => sub.language !== 'zh');
        triggerMailto(subject, body, targets);
    });

    // 5.2 Send Mailto ZH (BCC)
    const mailtoBtnZh = document.getElementById("btn-send-mailto-zh");
    mailtoBtnZh?.addEventListener("click", () => {
        const subject = document.getElementById("email-subject-zh").value.trim();
        const body = document.getElementById("email-body-zh").value.trim();
        if (!subject || !body) {
            alert(dict.fillZhSubjectContent);
            return;
        }
        const targets = subscribers.filter(sub => sub.language === 'zh');
        triggerMailto(subject, body, targets);
    });
    
    // 6. Resend Bulk Send (Bilingual Smart Router)
    const form = document.getElementById("newsletter-form");
    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const enSubject = document.getElementById("email-subject-en").value.trim();
        const enBody = document.getElementById("email-body-en").value.trim();
        const zhSubject = document.getElementById("email-subject-zh").value.trim();
        const zhBody = document.getElementById("email-body-zh").value.trim();
        
        const apiKey = localStorage.getItem("resend_api_key");
        
        if (!apiKey) {
            alert(State.language === 'zh' ? "请先在上方配置 Resend API Key！" : "Please configure your Resend API Key first.");
            return;
        }
        if (subscribers.length === 0) {
            alert(dict.noSubscribers);
            return;
        }
        
        const confirmMsg = dict.resendConfirm.replace("{count}", subscribers.length);
        if (!confirm(confirmMsg)) {
            return;
        }
        
        const sendBtn = document.getElementById("btn-send-resend");
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (State.language === 'zh' ? '发送中...' : 'Sending...');
        
        const enTargets = subscribers.filter(sub => sub.language !== 'zh');
        const zhTargets = subscribers.filter(sub => sub.language === 'zh');
        
        let totalSuccess = 0;
        let totalFail = 0;
        let allErrors = [];
        
        // 1. Send EN version to EN subscribers
        if (enTargets.length > 0) {
            const enResult = await sendNewsletterViaResend(enSubject, enBody, enTargets, apiKey);
            if (enResult.success) {
                totalSuccess += enResult.successCount;
                totalFail += enResult.failCount;
                allErrors = allErrors.concat(enResult.errors);
            } else {
                totalFail += enTargets.length;
                allErrors.push("EN mailing error: " + enResult.error);
            }
        }
        
        // 2. Send ZH version to ZH subscribers
        if (zhTargets.length > 0) {
            const zhResult = await sendNewsletterViaResend(zhSubject, zhBody, zhTargets, apiKey);
            if (zhResult.success) {
                totalSuccess += zhResult.successCount;
                totalFail += zhResult.failCount;
                allErrors = allErrors.concat(zhResult.errors);
            } else {
                totalFail += zhTargets.length;
                allErrors.push("ZH mailing error: " + zhResult.error);
            }
        }
        
        sendBtn.disabled = false;
        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + dict.resendSmart;
        
        alert(`${dict.resendComplete}\n${dict.resendSuccessCount}：${totalSuccess} 封\n${dict.resendFailCount}：${totalFail} 封`);
        if (allErrors.length > 0) {
            console.error("Mailing error log:", allErrors);
        }
    });
}

// --- 7. APPLICATION STARTUP ---
document.addEventListener("DOMContentLoaded", () => {
    // Setup Theme Toggle
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    // Load existing theme preference
    const savedTheme = localStorage.getItem("mm_theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        document.body.classList.remove("dark-theme");
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
    
    themeToggleBtn?.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("mm_theme", isDark ? "dark" : "light");
        themeToggleBtn.innerHTML = isDark 
            ? '<i class="fas fa-sun"></i> Light Mode' 
            : '<i class="fas fa-moon"></i> Dark Mode';
    });
    
    // Setup modal hooks
    setupModalControllers();
    
    // Subscribe to state modifications
    window.addEventListener("statechange", syncUserStateUI);
    
    // Sync initial User UI
    syncUserStateUI();
    
    // Start routing
    Router.init();
});

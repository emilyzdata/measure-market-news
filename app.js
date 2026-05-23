/*
================================================================================
   MEDIA METRIC - CORE APPLICATION SCRIPT
   Features: Hash Router, Mock Database, State Controller, Interactive Analytics Charts
================================================================================
*/

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
            <p>Few television dramas in the streaming era have captured the cultural zeitgeist or generated the raw emotional friction of HBO's <em>Euphoria</em>. Known for its hyper-stylized cinematography, intense portrayals of teen angst, and characters navigating emotional turbulence, the show's impact extends far beyond standard television viewership ratings. What began as a dramatic narrative about adolescent self-discovery rapidly transformed into a massive, multi-million dollar consumer economy. By introducing a bold, glitter-drenched, high-contrast visual signature, <em>Euphoria</em> redefined modern makeup standards, revolutionized retail fashion collections, and created a template for how media assets can directly catalyze retail purchasing behavior.</p>
            
            <blockquote>
                "Euphoria did not just capture teenage emotional chaos; it weaponized it as a visual aesthetic that built a new, glitter-drenched consumer economy."
            </blockquote>
            
            <h2>The Glitter-Drenched Aesthetic: Redefining Beauty Standards</h2>
            <p>Prior to <em>Euphoria</em>, the beauty industry had spent nearly a decade dominated by the \"clean girl\" aesthetic and minimalist, matte-finish products. The show’s lead makeup designer, Doniella Davy, broke this mold by treating makeup as a direct extension of a character's emotional state. By applying thick sweeps of body glitter, face gems, neon graphic eyeliner, and dramatic rhinestones to characters like Rue, Jules, Maddy, and Cassie, the show created a new, expressive language of cosmetics.</p>
            <p>The consumer response was instantaneous. Retail media networks and beauty brands witnessed an unprecedented surge in demand for glitter and graphic cosmetics. According to global search and sales data, searches for \"face rhinestones\" and \"body glitter\" skyrocketed by over <strong>400%</strong> during the broadcast of the show's second season. Indie brands that specialized in bold pigments sold out in minutes, and major cosmetics retailers quickly overhauled their merchandising grids to feature \"Euphoria-inspired\" collections at the front of their stores, proving that media aesthetics have the power to shift global product demand curves overnight.</p>
            
            <h2>Attributing Media Impact to Retail Conversions</h2>
            <p>For brand marketers, the \"Euphoria Effect\" represents the holy grail of media impact—but measuring it requires sophisticated attribution models. Standard click-attribution models are useless here: a user watches an episode on HBO Max, gets inspired, and buys glitter eyeshadow at Sephora or Target days later. This is a classic cross-platform offline conversion halo.</p>
            <p>To quantify this impact, retail analytics teams rely on <strong>Media Mix Modeling (MMM)</strong> and <strong>Synthetic Control testing</strong>. By treating the broadcast dates of the show's episodes as distinct baseline shocks, models can isolate the lift in organic category searches and store foot traffic. Our models show that during the weekly broadcast windows, the organic conversion multiplier for glitter-related cosmetics rose to <strong>2.5x</strong>, meaning that the media exposure acted as a massive demand catalyst, making all subsequent paid search and display campaigns significantly more efficient.</p>
            
            <h2>The Future of Entertainment Commerce</h2>
            <p>The lesson of the Euphoria consumer economy is that modern commerce is no longer just about product utility; it is about narrative and identity. As streaming platforms and retail media networks continue to merge, the pathway from media consumption to transaction will become even more integrated. Brands that can align their product development and advertising campaigns with the visual language of culturally dominant narratives will be best positioned to capture the hearts—and wallets—of the next generation of consumers.</p>
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
    },
    
    // Save state changes
    save() {
        localStorage.setItem("mm_user", JSON.stringify(this.user));
        localStorage.setItem("mm_bookmarks", JSON.stringify(this.bookmarks));
        
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

// --- 3. THE LIGHTWEIGHT ROUTER ---
const Router = {
    routes: {},
    
    init() {
        window.addEventListener("hashchange", () => this.handleRoute());
        window.addEventListener("load", () => this.handleRoute());
    },
    
    handleRoute() {
        const hash = window.location.hash || "#home";
        let matched = false;
        
        // Update nav active states
        document.querySelectorAll(".nav-links li").forEach(li => li.classList.remove("active"));
        
        // Simple routes
        if (hash === "#home" || hash === "") {
            document.getElementById("nav-home")?.classList.add("active");
            renderHome();
            matched = true;
        } else if (hash === "#index") {
            document.getElementById("nav-index")?.classList.add("active");
            renderDashboard();
            matched = true;
        } else if (hash === "#saved") {
            document.getElementById("nav-saved")?.classList.add("active");
            renderSaved();
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
    return `
        <div class="homepage-grid">
            <!-- Left Column: Briefings -->
            <aside class="col-briefings">
                <h3 class="section-sidebar-title">LATEST INTEL</h3>
                <div class="briefings-list" id="briefings-container"></div>
            </aside>
            
            <!-- Center Column: Main Content -->
            <section class="col-main-content" id="main-articles-container"></section>
            
            <!-- Right Column: Insights & Widgets -->
            <aside class="col-insights">
                <!-- Data Index Widget -->
                <div class="widget-box">
                    <h3 class="widget-title">
                        M&M INDEX 
                        <a href="#index">Full Dashboard &rarr;</a>
                    </h3>
                    <div class="index-stats-list">
                        <div class="index-stat-row">
                            <span class="index-stat-name">Privacy Signal Loss</span>
                            <span class="index-stat-value stat-up">${State.dashboardFilters.privacyImpact}% &uarr;</span>
                        </div>
                        <div class="index-stat-row">
                            <span class="index-stat-name">Avg. CAC (Blended)</span>
                            <span class="index-stat-value">$42.80</span>
                        </div>
                        <div class="index-stat-row">
                            <span class="index-stat-name">Incrementality Index</span>
                            <span class="index-stat-value" id="mini-inc-idx">0.68</span>
                        </div>
                        <div class="index-stat-row">
                            <span class="index-stat-name">Attribution Variance</span>
                            <span class="index-stat-value stat-down" id="mini-var-idx">32% &darr;</span>
                        </div>
                    </div>
                </div>
                
                <!-- Newsletter Signup -->
                <div class="newsletter-box">
                    <h3 class="newsletter-title">The Daily Attribution</h3>
                    <p class="newsletter-desc">Join 45,000+ CMOs, analysts, and advertisers. Get marketing measurement insight delivered direct to your inbox.</p>
                    <form id="newsletter-form" class="newsletter-input-group">
                        <input type="email" class="newsletter-input" placeholder="Work email address" required>
                        <button type="submit" class="btn-newsletter-submit">Subscribe Now</button>
                    </form>
                </div>
                
                <!-- Most Read List -->
                <div class="widget-box">
                    <h3 class="section-sidebar-title" style="border-bottom: 1px solid var(--border-color); padding-bottom: 6px;">MOST POPULAR</h3>
                    <div class="most-read-list" id="popular-container"></div>
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
    const briefingArticles = ARTICLES.slice().reverse();
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
    const leadArticle = ARTICLES.find(a => a.trending) || ARTICLES[0];
    const secondaryArticles = ARTICLES.filter(a => a.id !== leadArticle.id);
    
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
            <span class="lead-author">By <strong>${leadArticle.author}</strong></span>
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
                <span>By ${art.author}</span>
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
    popularContainer.innerHTML = ARTICLES.slice(0, 4).map((art, idx) => `
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
    const filtered = ARTICLES.filter(art => art.category.toLowerCase() === category.toLowerCase());
    
    let html = `
        <div class="saved-view">
            <div class="saved-header">
                <h1>${category} News</h1>
                <span style="font-size: 0.85rem; color: var(--text-tertiary); font-weight: 500;">
                    ${filtered.length} Articles Available
                </span>
            </div>
            
            ${filtered.length === 0 ? `
                <div class="saved-empty">
                    <div class="saved-empty-icon"><i class="far fa-newspaper"></i></div>
                    <p>No articles found in this category.</p>
                    <a href="#home" style="color: var(--accent-gold); text-decoration: underline; margin-top: 15px; display: inline-block;">Return Home</a>
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
            renderCategoryView(category);
        });
    });
}

// Render Article Detail
function renderArticleDetail(id) {
    const mainEl = document.getElementById("main-viewport");
    const article = ARTICLES.find(a => a.id === id);
    
    if (!article) {
        mainEl.innerHTML = `
            <div style="text-align: center; padding: 100px 0;">
                <h2>Article Not Found</h2>
                <a href="#home" style="color: var(--accent-gold); text-decoration: underline; margin-top: 20px; display: inline-block;">Return to Homepage</a>
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
                            <span class="pub-date">Published ${article.date} &bull; ${article.readTime}</span>
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
    
    const savedArticles = ARTICLES.filter(a => State.bookmarks.includes(a.id));
    
    let html = `
        <div class="saved-view">
            <div class="saved-header">
                <h1>Bookmarked Articles</h1>
                ${savedArticles.length > 0 ? `<button class="btn-clear-saved" id="clear-bookmarks-btn">Clear All</button>` : ''}
            </div>
            
            ${savedArticles.length === 0 ? `
                <div class="saved-empty">
                    <div class="saved-empty-icon"><i class="far fa-bookmark"></i></div>
                    <p>No saved articles yet. Bookmark articles from the home feed or read views.</p>
                    <a href="#home" style="color: var(--accent-gold); text-decoration: underline; margin-top: 15px; display: inline-block;">Return Home</a>
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
                                    <span>By ${art.author}</span> &bull; <span>${art.date}</span> &bull; <span>${art.readTime}</span>
                                </div>
                            </div>
                            <button class="btn-remove-saved" data-id="${art.id}" title="Remove Bookmark">
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
        if (confirm("Are you sure you want to clear all bookmarked articles?")) {
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

// Render Interactive Benchmarks Dashboard (Index Page)
function renderDashboard() {
    const mainEl = document.getElementById("main-viewport");
    
    let html = `
        <div class="dashboard-grid">
            <div class="dashboard-desc">
                <h1>Attribution & Performance Index</h1>
                <p>
                    This modeling simulator aggregates performance lift results across over 450 brands in our database. 
                    Adjust the privacy and optimization parameters below to simulate changes in marketing channel efficiency index, attribution errors, and forecasted Customer Acquisition Costs (CAC).
                </p>
            </div>
            
            <!-- Controls Panel -->
            <div class="dashboard-controls">
                <h3 class="vis-title">Model Adjusters</h3>
                
                <div class="control-group">
                    <label class="control-label" for="param-privacy">
                        iOS Privacy Sandbox Impact
                        <span class="val" id="val-privacy">${State.dashboardFilters.privacyImpact}%</span>
                    </label>
                    <input type="range" id="param-privacy" class="control-slider" min="10" max="95" value="${State.dashboardFilters.privacyImpact}">
                    <p style="font-size:0.65rem; color:var(--text-tertiary); margin-top:2px;">Higher values simulate cookie-less tracking environments and lower pixel tracking signal.</p>
                </div>
                
                <div class="control-group">
                    <label class="control-label" for="param-smoothing">
                        MMM Smoothing Window
                        <span class="val" id="val-smoothing">${State.dashboardFilters.mmmSmoothing}d</span>
                    </label>
                    <input type="range" id="param-smoothing" class="control-slider" min="10" max="180" value="${State.dashboardFilters.mmmSmoothing}">
                    <p style="font-size:0.65rem; color:var(--text-tertiary); margin-top:2px;">Adjust the statistical lag smoothing duration for B2B pipeline projections.</p>
                </div>
                
                <div class="control-group">
                    <label class="control-label" for="param-roas">
                        Global Ad Spend Scaling
                        <span class="val" id="val-roas">${State.dashboardFilters.roasMultiplier.toFixed(1)}x</span>
                    </label>
                    <input type="range" id="param-roas" class="control-slider" min="5" max="25" value="${State.dashboardFilters.roasMultiplier * 10}">
                    <p style="font-size:0.65rem; color:var(--text-tertiary); margin-top:2px;">Scale simulated ad budgets to observe ad fatigue decay velocity.</p>
                </div>
                
                <div class="dashboard-stat-cards">
                    <div class="dash-stat-card">
                        <div class="dash-stat-label">Attribution Accuracy</div>
                        <div class="dash-stat-value" id="stat-accuracy">60%</div>
                        <div class="dash-stat-subtext" id="stat-accuracy-sub">Industry baseline</div>
                    </div>
                    <div class="dash-stat-card">
                        <div class="dash-stat-label">Geo-Lift Advantage</div>
                        <div class="dash-stat-value" style="color: var(--accent-gold);" id="stat-advantage">+28.5%</div>
                        <div class="dash-stat-subtext">vs. platform tracking</div>
                    </div>
                    <div class="dash-stat-card">
                        <div class="dash-stat-label">Est. Blended CPA</div>
                        <div class="dash-stat-value" id="stat-cpa">$48.20</div>
                        <div class="dash-stat-subtext" id="stat-cpa-sub">Target ROAS aligned</div>
                    </div>
                </div>
            </div>
            
            <!-- Visual Charts Display -->
            <div class="dashboard-vis">
                <div class="vis-header">
                    <h3 class="vis-title" id="chart-main-title">Simulated Channel Efficacy & Attribution Variance</h3>
                    <div class="vis-legend">
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: var(--accent-teal); border-radius: 2px;"></div>
                            <span>Reported ROAS</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: var(--accent-danger); border-radius: 2px;"></div>
                            <span>True (Lift) ROAS</span>
                        </div>
                    </div>
                </div>
                
                <!-- SVG Interactive Chart -->
                <div class="svg-chart-container" id="svg-chart-container">
                    <div class="chart-tooltip" id="chart-tooltip"></div>
                    <svg viewBox="0 0 500 240" id="dashboard-svg"></svg>
                </div>
            </div>
        </div>
    `;
    
    mainEl.innerHTML = html;
    
    // Initialize slider inputs and redraw charts
    initDashboardSimulator();
}

function initDashboardSimulator() {
    const privSlider = document.getElementById("param-privacy");
    const smoothSlider = document.getElementById("param-smoothing");
    const roasSlider = document.getElementById("param-roas");
    
    const privLabel = document.getElementById("val-privacy");
    const smoothLabel = document.getElementById("val-smoothing");
    const roasLabel = document.getElementById("val-roas");
    
    const statAccuracy = document.getElementById("stat-accuracy");
    const statAccuracySub = document.getElementById("stat-accuracy-sub");
    const statCpa = document.getElementById("stat-cpa");
    const statCpaSub = document.getElementById("stat-cpa-sub");
    
    const svgEl = document.getElementById("dashboard-svg");
    const tooltip = document.getElementById("chart-tooltip");
    
    function drawSimulation() {
        const privacy = parseInt(privSlider.value, 10);
        const smooth = parseInt(smoothSlider.value, 10);
        const spendMult = parseInt(roasSlider.value, 10) / 10;
        
        // Update Labels
        privLabel.textContent = `${privacy}%`;
        smoothLabel.textContent = `${smooth}d`;
        roasLabel.textContent = `${spendMult.toFixed(1)}x`;
        
        // Update Stats based on formulas
        const accuracy = Math.max(10, 100 - privacy - (spendMult * 8));
        statAccuracy.textContent = `${Math.round(accuracy)}%`;
        if (accuracy > 65) {
            statAccuracy.style.color = "var(--accent-success)";
            statAccuracySub.textContent = "High confidence data";
        } else if (accuracy > 40) {
            statAccuracy.style.color = "var(--accent-gold)";
            statAccuracySub.textContent = "Moderately modeled";
        } else {
            statAccuracy.style.color = "var(--accent-danger)";
            statAccuracySub.textContent = "High attribution risk";
        }
        
        const baseCpa = 32.50;
        const cpa = baseCpa * (1 + (privacy / 100) * 0.6) * (1 + (spendMult - 1) * 0.4);
        statCpa.textContent = `$${cpa.toFixed(2)}`;
        statCpaSub.textContent = `Sensitivity: ${spendMult > 1.5 ? 'Fatigue Active' : 'Optimal Scale'}`;
        
        // Draw the Chart (Bar Chart of Channel ROAS comparison)
        const channels = [
            { name: "Meta Ads", rep: 3.5, liftFact: 0.70 },
            { name: "Google Search", rep: 4.8, liftFact: 0.85 },
            { name: "TikTok Ads", rep: 2.8, liftFact: 0.50 },
            { name: "Retail Media", rep: 5.2, liftFact: 0.80 },
            { name: "Partnerships", rep: 2.2, liftFact: 0.95 }
        ];
        
        // Adjust values dynamically based on dashboard filters
        channels.forEach(ch => {
            // High privacy impact decreases lift factors for pixel-heavy platforms (Meta, TikTok)
            if (ch.name === "Meta Ads" || ch.name === "TikTok Ads") {
                ch.liftFact = Math.max(0.2, ch.liftFact - (privacy / 200));
            }
            // Ad spend scaling induces creative fatigue, reducing both reported and true ROAS
            ch.rep = Math.max(1.1, ch.rep / (1 + (spendMult - 1) * 0.3));
        });
        
        // Build SVG elements
        let svgContent = "";
        
        // Chart limits
        const margin = { top: 20, right: 20, bottom: 40, left: 40 };
        const width = 500;
        const height = 240;
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;
        
        // Axes
        svgContent += `<line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${height - margin.bottom}" class="chart-axis" />`;
        svgContent += `<line x1="${margin.left}" y1="${height - margin.bottom}" x2="${width - margin.right}" y2="${height - margin.bottom}" class="chart-axis" />`;
        
        // Y-axis gridlines & labels (ROAS scale 0 to 6)
        const maxVal = 6;
        for (let i = 0; i <= maxVal; i += 2) {
            const y = height - margin.bottom - (i / maxVal) * chartHeight;
            svgContent += `
                <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" class="chart-gridline" />
                <text x="${margin.left - 8}" y="${y + 3}" class="chart-axis-text" text-anchor="end">${i}.0x</text>
            `;
        }
        
        // Draw bars
        const numBars = channels.length;
        const barSpacing = chartWidth / numBars;
        const barWidth = 14;
        
        channels.forEach((ch, idx) => {
            const xCenter = margin.left + (idx * barSpacing) + barSpacing / 2;
            
            const repHeight = (ch.rep / maxVal) * chartHeight;
            const repY = height - margin.bottom - repHeight;
            
            const trueRoas = ch.rep * ch.liftFact;
            const trueHeight = (trueRoas / maxVal) * chartHeight;
            const trueY = height - margin.bottom - trueHeight;
            
            // X Axis Label
            svgContent += `
                <text x="${xCenter}" y="${height - margin.bottom + 18}" class="chart-axis-text" text-anchor="middle" style="font-weight:600;">${ch.name}</text>
            `;
            
            // Reported Bar (Teal Accent)
            svgContent += `
                <rect x="${xCenter - barWidth - 1}" y="${repY}" width="${barWidth}" height="${repHeight}" 
                      fill="var(--accent-teal)" fill-opacity="0.85" rx="1" ry="1" class="chart-bar"
                      data-channel="${ch.name}" data-type="Reported" data-val="${ch.rep.toFixed(2)}x">
                </rect>
            `;
            
            // True Bar (Crimson Accent)
            svgContent += `
                <rect x="${xCenter + 1}" y="${trueY}" width="${barWidth}" height="${trueHeight}" 
                      fill="var(--accent-danger)" rx="1" ry="1" class="chart-bar"
                      data-channel="${ch.name}" data-type="True (Incremental)" data-val="${trueRoas.toFixed(2)}x">
                </rect>
            `;
        });
        
        svgEl.innerHTML = svgContent;
        
        // Tooltip functionality
        svgEl.querySelectorAll(".chart-bar").forEach(bar => {
            bar.addEventListener("mousemove", (e) => {
                const rect = bar.getBoundingClientRect();
                const containerRect = document.getElementById("svg-chart-container").getBoundingClientRect();
                
                const x = rect.left - containerRect.left + rect.width / 2;
                const y = rect.top - containerRect.top - 35;
                
                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;
                tooltip.style.opacity = 1;
                tooltip.style.transform = "translateX(-50%)";
                tooltip.innerHTML = `<strong>${bar.dataset.channel}</strong><br/>${bar.dataset.type}: <b>${bar.dataset.val}</b>`;
            });
            
            bar.addEventListener("mouseleave", () => {
                tooltip.style.opacity = 0;
            });
        });
        
        // Update Mini indicators in global state (re-rendered dynamically if homepage changes)
        State.dashboardFilters.privacyImpact = privacy;
        State.dashboardFilters.mmmSmoothing = smooth;
        State.dashboardFilters.roasMultiplier = spendMult;
    }
    
    // Event listeners
    privSlider.addEventListener("input", drawSimulation);
    smoothSlider.addEventListener("input", drawSimulation);
    roasSlider.addEventListener("input", drawSimulation);
    
    // Initialize Draw
    drawSimulation();
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
    
    // Newsletter Submit
    document.getElementById("newsletter-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input").value;
        alert(`Thank you! Subscription confirmed for: ${email}. You have signed up for the Daily Attribution Newsletter.`);
        e.target.reset();
    });
}

// --- 5. MODAL WORKFLOW CONTROLLERS ---

function openLoginModal() {
    const modal = document.getElementById("modal-login");
    modal.classList.add("active");
}

function openSubscriptionModal() {
    const modal = document.getElementById("modal-subscribe");
    modal.classList.add("active");
}

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
    
    // Header trigger buttons
    document.getElementById("header-login-btn")?.addEventListener("click", () => openLoginModal());
    document.getElementById("header-subscribe-btn")?.addEventListener("click", () => openSubscriptionModal());
    
    // Logout button
    document.getElementById("header-logout-btn")?.addEventListener("click", () => {
        State.logout();
    });
    
    // Login form submission
    document.getElementById("login-modal-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        State.login(email);
        closeAllModals();
        alert(`Welcome back, ${email}!`);
    });
    
    // Subscribe form submission
    document.getElementById("subscribe-modal-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("sub-email").value;
        State.login(email);
        State.subscribe();
        closeAllModals();
        alert(`Success! Thank you for subscribing to Media Metric Professional! Your premium insights are now unlocked.`);
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

// --- 6. BRAND HEADER & USER STATE SYNCHRONIZATION ---
function syncUserStateUI() {
    const loginBtn = document.getElementById("header-login-btn");
    const subBtn = document.getElementById("header-subscribe-btn");
    const logoutBtn = document.getElementById("header-logout-btn");
    const userInfo = document.getElementById("header-user-info");
    const userBadge = document.getElementById("header-user-badge");
    const bookmarkCount = document.getElementById("bookmark-count-badge");
    
    // Update bookmark count badge
    if (bookmarkCount) {
        bookmarkCount.textContent = State.bookmarks.length;
    }
    
    // Update theme toggle classes if applicable (already handled by body class)
    
    if (State.user.isLoggedIn) {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "flex";
        userInfo.style.display = "flex";
        userInfo.textContent = State.user.email;
        
        if (State.user.isSubscribed) {
            subBtn.style.display = "none";
            userBadge.style.display = "inline-block";
            userBadge.textContent = "Pro Member";
            userBadge.className = "btn-subscribe";
            userBadge.style.backgroundColor = "var(--accent-gold)";
            userBadge.style.color = "#111111";
        } else {
            subBtn.style.display = "inline-block";
            userBadge.style.display = "inline-block";
            userBadge.textContent = "Free Tier";
            userBadge.className = "";
            userBadge.style.backgroundColor = "transparent";
            userBadge.style.border = "1px solid var(--border-color)";
            userBadge.style.color = "var(--text-secondary)";
            userBadge.style.padding = "4px 8px";
            userBadge.style.borderRadius = "2px";
        }
    } else {
        loginBtn.style.display = "flex";
        subBtn.style.display = "inline-block";
        logoutBtn.style.display = "none";
        userInfo.style.display = "none";
        userBadge.style.display = "none";
    }
    
    // Re-render current hash view to unlock/lock premium content
    const hash = window.location.hash || "#home";
    const articleMatch = hash.match(/^#article\/(\d+)$/);
    if (articleMatch) {
        const id = parseInt(articleMatch[1], 10);
        renderArticleDetail(id);
    }
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

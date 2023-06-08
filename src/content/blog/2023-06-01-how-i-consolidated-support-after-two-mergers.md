---
draft: false
title: How I Consolidated Product Support After Two Mergers
description: I share the milestones and approaches I used to create big change across three legacy companies.  And more importantly, the lessons I learned along the way.
author: Mariena Quintanilla
publishDate: 2023-06-01T00:00:00.000Z
coverSVG: ../images/blog/photo_help_man_desk.jpeg
socialImage: ../images/blog/photo_help_man_desk.jpeg
linkedin:  https://www.linkedin.com/pulse/how-i-consolidated-product-support-after-two-mergers-quintanilla
categories:
  - Change Management
  - Product Support
tags:
  - jira service desk
  - continuous improvement
  - stakeholder management
---

Recently, a former colleague - let’s call her Tanya, recently asked me for advice on setting up a triage process for a product with no defined priorities, SLAs, or support team.  The lack of process was affecting the productivity of multiple engineering teams and creating strain on account management teams, which struggled to manage expectations with customers.   Given it’s a problem many organizations deal with, I want to share my experience.

In April 2020, Foursquare and Factual merged (this was when I joined).  Less than a year prior, Foursquare had acquired Placed.  With three cultures, six B2B products, and three consumer apps, it was hard for individuals to navigate product support internally.  

I was charged with building an organization and processes that would provide technical support to customers for the suite of products now under the Foursquare umbrella.

Starting this journey immediately following the merger was exhilarating but also scary - I wasn’t an expert in most of the products (only three-ish had carried over from Factual in the merger), and I had a huge number of peers I had only just met - we didn’t have long-standing relationships, and we hadn’t built trust.

Despite these challenges, I got buy-in on a consistent support process, including defining SLAs and priorities, across seven different product lines with a group of 10 stakeholders in just three months.  A month later, the shiny new process and ticketing system were rolled out to over 100 members of the Revenue organization.    

Here’s how I did it - and perhaps more importantly, what I learned along the way.

### The Approach

| Month 1 | Month 2 | Month 3 | Month 4 |
| --- | --- | --- | --- |
| Scaffolding | Proposal | Refine & Build | Launch & Adoption |
| <ol><li>Define the scope</li><li>Build a template</li><li>Establish working groups</li><li>Begin weekly check-ins</li></ol>  | <ol><li>Weekly check-ins</li><li>Working groups complete a draft using the template</li><li>Working group provides feedback on the draft</li><li>Lead reviews feedback</li></ol> | <ol><li>Solicit and incorporate feedback from senior leaders and stakeholders</li><li>Identify objections</li></ol>| <ol><li>Launch planning</li><li>Implementation</li></ol> | <ol><li>Testing</li><li>Internal team trainings</li><li>Launch announcements</li><li>Shut down legacy systems</li></ol> |

**Month One: Scaffolding**

The first thing I did was start a Jira template that would be completed for each of the six product lines. This allowed me to get agreement on the project scope, and determine who the right people were to provide input initially.  

The template provided sections to define:

- **Product definition** to link out to documentation on what features were and were not supported.
- **Product SLAs** to define key metrics that the product would adhere to, such as uptime, data latency, and report publish time
- **Support SLAs** to provide expected turnaround times for the various requests the support team receives.  This provided a helpful way for me to onboard and define a taxonomy for support.  It would also be used in our ticketing system to assemble ticket types.
- **Priority definitions** to make clear what was a P1, P2, P3, and P4.  This was one of the most contested areas, as we needed cross-functional alignment on what issues were urgently tackled and what resolution times we should aim for.  I started each workgroup with a framework based on severity and breadth of impact.
- **Customer Tiers** to make clear to the support team which customers should get the highest levels of support.
- **Roles & Responsibilities** to create alignment on what the support team would field vs. engineering, operations, customer success, etc.  As my team was new, this helped get alignment on handoffs and borders across teams.
- **Escalation Teams** to note which of the engineering teams to go to for various problems, if the issue could not be resolved.  This was the main section that we updated as the organization evolved and team members changed.  It was helpful in avoiding routing issues to the wrong team, which would hurt resolution time.

In addition, I put together a project page that specified who was in each of the workgroups (one for each product), the responsibilities of the working group, and the project timeline.

**Month Two:  Build a proposal**

We tackled the meat of the work in the second month.  Workgroups met weekly.  Each product had a different way of working - some used the weekly meetings as live work sessions; others preferred to assign out sections, and the weekly check-in was a quick standup for accountability and to review feedback within the group.

Across teams, everyone in the workgroup reviewed the document and provided comments.  The lead determined whether to incorporate feedback immediately or discuss it in the weekly meeting.

**Month Three: Refine / Buy-in**

In the third month, we expanded the set of contributors, getting feedback on the proposal from leaders in the organization who weren’t in the workgroup but whose teams would also be affected.  I also shared the proposal with my executive sponsors.  Some of the feedback we received was easy to incorporate, other feedback was not.  I could see which stakeholders weren’t on board with the change and spent time understanding their objections.  You can’t always get everyone fully on board, but I tried to show up with curiosity, and empathy, and find solutions.  

This period was also when the implementation of the ticketing system took place within Jira Service Desk (JSD), based on the types of requests each product defined for support, and their SLAs.  I worked with my team and product managers to agree on what information we needed to capture, so this system would reduce back and forth, and give us the information needed to prioritize and reproduce the issue.  I also created the internal support views (”agents” in JSD), initially starting with queues and later moving to Kanban boards with swim lanes based on priority.

So, within 90 days, we built our SLAs and a whole system to support them. Now it was time to put this into practice. 

**Month Four: Launch**

SLAs are great on paper, but the real test is when you turn them on. I worked with a small group to test the new ticketing system end-to-end, provided several training sessions, and joined multiple team meetings to announce the change and answer questions for the 200+ members of the Revenue, Product, and Engineering organizations that the change would impact.  On the day of the launch, I over-communicated - sharing in Slack and various email aliases to use the new ticketing system, and with links to documentation for SLAs and priorities and instructions on where to ask questions and report issues.

I continued reiterating the new process for anyone who used older systems and enlisted support from product managers and other leaders to do the same.  Within a couple of weeks, we were able to shut down legacy processes. 

### What went well

Getting buy-in on the new processes, tools, and SLAs was possible thanks to four main factors:

- First, the scaffolding I set up made clear the scope of the problem, timeline, and expectations of each stakeholder that was in a working group.  This created a sense of responsibility and clarified who was a decision maker, who provided input, and at what stage their input would be accepted.
- Second, I focused on continuous improvement in my messaging.  Enhancements that individuals cared about would be implemented in a second later launch, and issues that were found would be fixed in a timely manner.   This helped me navigate requests to increase the scope and push for progress over perfection.
- Third, I was sensitive to cultural differences between legacy companies.  I let each product workgroup define how to apply the framework for support to their product.  This meant balancing what would be consistent with what worked for that team, and not being overly prescriptive.
- Lastly, I had support from executives, and leveraged that support a few times when dealing with difficult stakeholders, or disagreements about what parts of support should be consistent across the company.

The changes went into effect late in the summer of 2020, one of the first milestones in integrating the three companies.  I created a Slack channel to gather feedback, and explicitly requested feedback from stakeholders as well as my own team for several weeks, to make sure the new processes and tools were working.  Where we found rough edges, I made adjustments.  I intentionally carved out time in my schedule for several weeks to make small improvements and prioritized a solution to a more painful edge case for the following quarter.

And it worked - the processes helped us scale new hire onboarding, reduced the dependency on product managers in day-to-day support, and reduced inbound questions to the team as account managers now had published turnaround times for common requests.

Of course, there was still plenty of room to do better - the following year, we focused on building out a reporting mechanism and on optimizing the triage process.  Luckily, the initial foundation that we created was solid, setting us on a path where we could continuously improve customer support.

### Learnings

For Tanya and anyone looking to learn from my experience, know that using Jira Service Desk as an internal product support portal in an organization that values transparency and collaboration requires awkward workarounds. I went into the project excited to work with a Zendesk alternative. Now, after three years of working with JSD and getting it to bend and shape in the way we needed, I hesitate to recommend JSD with a tight Jira integration for internal product support.

Once we were deep in the weeds of our setup, it was even harder to consider what a proper long-term support strategy should look like.  Moving fast enabled us to solve an urgent need quickly - but at the expense of finding a long-term solution that would enable a maturing organization to shift to a two-tiered support organization with an external ticketing system and better reporting.  Three years later, the system felt bloated.

Looking back, I made a couple of mistakes:

- **Forgetting the “why.**” Training sessions focused heavily on what was changing and how to use the new tools.  This left many individuals frustrated as they didn’t understand why the change was happening.  Specifically, some teams already had a well-defined process in their corner of the company, so for them, it appeared as if the change was without benefit.  They didn’t feel the pain on the other end, nor did they know that other parts of the company didn’t have a similar process.  Help individuals in your organization understand why a change is happening, and you’ll get less friction when the change takes place.
- **Choosing the wrong leads for the workgroups**.  In an effort to delegate, give my team members opportunities to lead, and maintain the level of control I needed to make sure the project would be completed on time, I chose a subject-matter expert from my team for each of the product areas.  But my team only had one SME for each project, and that person didn’t necessarily have the skills to lead a workgroup, nor want the opportunity.  Looking back, I missed an opportunity to build relationships with other stakeholders by asking some of them to lead the workgroup.  As a result, I picked up some of the slack, overworked myself, and got frustrated.
- **Keep it simple**. Managing several SLAs proved to be tedious.  Eventually, we would move to a simpler consolidated set of SLAs that balanced complexity and priority.   I also consolidated some request types as the team repeatedly found issues filed incorrectly - the customer wasn’t always sure how to classify their request.  In the framework, I ensured that customer tiers were defined, but the processes we created didn’t leverage them.  The extraneous information created confusion and should’ve been left out.

Luckily, my focus on continuous improvement applies to myself as well; I’m incorporating these learnings into future change management and organizational development projects going forward.  And I hope the framework I used and my learnings will help Tanya too.

---
layout: post
title: The Cost Of Poor Quality Code On Digital Transformation
author: Pete Heard
excerpt: This article will discuss code quality in the context of a large scale Digital Transformation ...
thumbnail: 404.jpg
category : digital-transformation
date:   2016-12-28 01:03:50 +0000
---

This article will discuss code quality in the context of a large scale Digital Transformation. Specifically we will look at the disadvantages to allowing poor quality code to become embedded in your applications and assess some of the risks and costs it brings.

## What We Will Cover :

- The Close Relationship Between Software Code And Digital Transformation
- Why Would Code Quality Be Important?
- The Financial Cost Of Bad Code
- The Operational Risk Of Bad Code 
- Leveraging Marginal Gains On Code Quality : Optimising Agile Software Delivery
- Conclusion

## The Close Relationshiop Between Software Code And Digital Transformation

Digital Transformation deals with the people process and technology that drive an organisations change to compete digitally. So firstly, we should look at couple of simple facts about Software Code in general and then position them into the context of our Digital Transformation. 

There are two high level observations we can make about Software In General :  

1. **Human Readable Machine Instructions** : Modern day programming, for the most part uses Object Oriented languages (such as Javascript, C#, Ruby etc) to efficiently encapsulate knowledge in a context that is easy for the human to understand (Objects) and turn it into something that easy for a machine to understand (binary instructions). It's important to understand this point becuase we reach a maxim; the code that in your organisation is simply a set of instructions that need to processed by a machine but they are written in a way to be understood by humans.
2. **Encapsulation of Business Knowledge** : Your applications are looking to connect your internal business process including the services you offer to other processes, customers and people in your organisation, this is the essence of value you provide as a business and is important to consider this because it means that your digital systems hold a huge amount of business value.

In the context of a Digital Transfomration that involves people processes and technology all 3 have a dependency on digital systems, these systems are powered by code and that code is important!

![Angular 2 CLI Project Selection Screen](images/1_image.png "Angular 2 CLI Project Selection Screen")
> The close relationship between Digital Transformation and Software Code

## Why Would Code Quality Matter?

The code in your organisation holds business value and process; it's a sort of living breathing document which powers your digital infrastructure to do the things we would otherwise have to do manually. 

If code is a document expressing a business process then we realise that like any other document in an organistion it should have certain standards placed on it...

### It's Just Documentation

The code is describing something important and needs to be read by multiple people in an organisation. In almost every other department (legal, executive, marketing etc) there are implicit controls about the standard of documentation which circulates. Even if this means people double checking emails that are sent before they hit send, re-reading important corporate documentation or even running spelling and grammar checks. Almost every official documentation in an organisation is expected to be :

- clear
- well structured
- free of errors
- formed with proper english and good grammar
- edited to the company standard
- compliant
- secure
- and ideally a pleasure to read!

It would be hard to imagine the scenario where the CEO sends out an email with bad spelling and grammar, or the idea that a marketing executive put's together a brief that doesn't read correctly. We don't do this in business because as professionals we don't want to waste each others time with low quality communication. 

### Why Quality Control is Often Too Weak In Agile Software Delivery

So if this is a standard we set with natural language documents why would software code be any different? It shouldn't.

Unfortunataly because only a small slice of the company would be able to reliably detect these code quality problems early on in the development process (the sofware developers themselves) you can see how a business can potentially be exposed to a large amount of risk this is because in almost every other process where complexity is involved there is some level of external auditing to make sure standards are adhered to. Builders have a foreman, accountants are independantly audited even Doctors results are scrutinised year on year, but with software this quality control often doesn't take place to a rigourous enough standard, we often just leave it to the teams that are writing the code and it's easy to see how quality problems can quietly brew deep inside an organisation slowly eroding the immense investment that they hold whilst they aren't aware. Of course this isn't to say teams can't self regulate they often do and often do it well (I have been on a number of them). But when we talk about Quality Control at an organisational level often this attitude of self regulation can leave gaping holes in a companies investement in digital infrastructure.

Invariably organisations eventually they do become aware when they have quality issues; excessive bugs, late releases, high developer churn and often the straight up inability to retain customers can all be symptoms of **bad code**. And we refer to this bad code as Technical Debt.


## The Financial Cost Of Bad Code / Technical Debt

A [study](http://www.castsoftware.com/castresources/materials/wp/cast_2010-annual-report_keyfindings.pdf) by Cast Software performed an audit of 75 code bases and has produced some interesting but also quite startling costs which give us an indication to the financial burden problems with code quality can place on an organisation. What they found is that on average a code base has exactly $2.82 of **technical debt** per line of code. What this means is an average cost of fixing some problems with that code base will equate to that cost per line. They identified problems are calculated by running a code analysis tool and identifying  (Security, Performance, Robustness and Changeability) problems in the code. Whilst automated tooling not enough to spot software quality problems it gives us at least a repeatable way to gather data on this topic.

The conclusion was interesting they found that the average size of a code base was 347,000 lines of code and this produces approximately $1,055,000 of technical debt! That means that on average a code base is carrying a million dollars worth of value locked up in 'Bad Code' or 'Technical Debt'. 

> "The Average Technical Debt in a Code Base Equates to $1,055,000" 

## Risks Associated With Poor Quality Code

We have seen how poor quality code can carry cost, but in the world of business it’s impossible to address cost without considering risk. A high risk business venture may yield short term capital gains but if it promptly put’s you out of business it probably isn’t a wise move. So looking at code quality through the lens of risk is the second way to evaluate code quality.

A [study](http://downloads.seapine.com/pub/papers/CostPoorQuality.pdf) performed by Seapine cited data it collected which identified that 24% of organisations were seeking to reduce the risk of poor customer satisfaction from the digital products they provide. Interestingly later on in the report that organisations claim that software quality and reliability are lifelines to long term customer retention and growth. 


![Angular 2 CLI Project Selection Screen](images/2_image.png "Angular 2 CLI Project Selection Screen")
> The relationship between cost and risk and code quality is inverselely proportional 

If keeping customers happy is a core part of your business strategy then addressing quality in a pragmatic way will help you ensure your long term financial goals can be not only met but improved on. This article has only cited a small amount of evidence but there is an abundance of independant research papers published which add to the argument that improved software quality helps to reduce costs...

- [http://www.castsoftware.com/castresources/materials/wp/cast_2010-annual-report_keyfindings.pdf](http://www.castsoftware.com/castresources/materials/wp/cast_2010-annual-report_keyfindings.pdf)
- [http://downloads.seapine.com/pub/papers/CostPoorQuality.pdf](http://downloads.seapine.com/pub/papers/CostPoorQuality.pdf)
- [https://www.infoq.com/news/2009/03/TDD-Improves-Quality](https://www.infoq.com/news/2009/03/TDD-Improves-Quality)
- [http://www.springer.com/computer/swe/journal/10664](http://www.springer.com/computer/swe/journal/10664)

## Leveraging Marginal Gains On Code Quality : Optimising Agile Software Delivery

The topic of marginal gains is an exciting new business topic that has emerged in recent years which is related to being able to optimise at the small scale in order to produce seismic shifts at the large scale, the basic idea is that this is a bottom up approach to business which uses, data, feedback and statistics at the micro level in order to drive strategy at the high level. 

An [interesting article](http://www.economist.com/news/business/21607816-businesses-should-aim-lots-small-wins-big-data-add-up-something-big-little) from the economist goes into more detail about marginal gains. The great thing about taking code quality serious in your organisation is that it is a very tangible asset which holds value in the form of information and process. If are adopting a marginal gains approach to your business and are looking to optimise at the small level to drive higher competitiveness improving code quality holds a huge opportunity for maximising growth, firstly by addressing debt and secondly by driving greater customer experience.


## Conclusion 

Organisations can and do chug through with poor quality code. And it is possibly to keep the wheels turning without paying due care an attention. 

But... as we have seen this comes loaded with higher **risk** and increased **cost** over the long term and because and over the long term if you take this increased risk and cost to it's conclusion it will simply drag an organisation down to it's weakest point and will make it uncompetitive. 

In a modern Digital Transformation programme an organisation should firstly look to unlock the hidden value in improving code quality and reducing technical debt for direct cost savings. And secondly they can reduce operational risk and improve customer satisfaction by driving up the internal quality of their applications. Improving code quality should be used as a tool to leverage faster and more efficient Digital Transformation.

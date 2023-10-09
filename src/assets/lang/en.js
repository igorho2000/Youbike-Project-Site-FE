export const en = {
	oppositeLanguage: "中",
	tomapmode: "Map Mode",
	tocontentmode: "Content Mode",
	introvideo: {
		title: "YouBike Dispatchment Optimization Study",
		subtitle:
			"Learn how the city government uses data to optimize and address bike dispatch and station selection issues.",
		team: "Research Team: Taipei Urban Intelligence Center",
		partner: "Collaborators: Dep. of Transportation, YouBike Ltd.",
		enter: "Explore",
	},
	homepage: {
		title: "2030 Green Transport Vision",
		content:
			'Taipei City envisions achieving "70% Green Transportation" by 2030. However, as YouBike 1.0 retires and new transport schemes are introduced, bike shortages have arisen. In response, this research was commissioned to tackle this issue and provide further insights into YouBike expansion in the future.',
		dataset: "Reports",
		explore: "Dashboard",
		management: "Management",
		managementdesc: "The Big Picture",
		weekday: "Commuters",
		weekdaydesc: "Refinements",
		weekend: "Weekends",
		weekenddesc: "Refinements",
	},
	tutorial: {
		dots: "Progress",
		next: "Next",
		header: "Home｜Languages",
	},
	shortage: {
		title: "How to Solve Bike Shortages? 1,780 Bikes were Added to 50 Critical Stations by the End of May",
		content:
			"In the past, we couldn't accurately gauge how severe bike shortages were or allocate resources based solely on public feedback. To get a complete picture, we analyzed data from all stations. We first identified stations with critical shortages during peak hours (7-9 AM and 5-7 PM), and then, by the end of May, added 1,780 bikes to those stations. This increased bike availability by an average of about 16%, effectively easing bike shortages.",
		note: "Bike Availability Rate: Number of hours with more than 1 bike available / 18 hours",
		"map-2": "Bike Availability Rate Mar. 2023",
		"map-3": "Bike Availability Rate Jul. 2023",
		"map-1": "Bike Availability Rate Diff Mar.-Jul. 2023",
		"btn-1": "Diff",
		"btn-2": "Mar.",
		"btn-3": "Jul.",
		"legend-1-1": "-100% ~ -20%",
		"legend-1-2": "-20% ~ -5%",
		"legend-1-3": "-5% ~ +5%",
		"legend-1-4": "+5% ~ +20%",
		"legend-1-5": "+20% ~ +100%",
		"legend-2-1": "11%",
		"legend-2-2": "87%",
		"legend-2-3": "92%",
		"legend-2-4": "96%",
		"legend-2-5": "98%",
		"legend-2-6": "100%",
		"legend-3-1": "11%",
		"legend-3-2": "87%",
		"legend-3-3": "92%",
		"legend-3-4": "96%",
		"legend-3-5": "98%",
		"legend-3-6": "100%",
	},
	"dispatch-optimization": {
		title: "Implementing Improvement Plans Aiming to Reduce Dispatch Workload by 1,192 Bikes Daily",
		content:
			"Apart from expanding stations, we're also working on optimizing our current resources. For example, in July 2023, we found that about 32 stations had more bikes than needed. We've been redistributing idle bikes and docks, and there are still more stations with potential for improvement, where we can reduce the number of bikes dispatched. These changes are expected to cut daily dispatch workload by 1,192 bikes.",
		"btn-1": "Bikes",
		"btn-2": "Docks",
		"btn-3": "Dispatch",
		"map-1": "Idle Bikes Optimization",
		"map-2": "Idle Docks Optimization",
		"map-3": "Dispatch Volume Optimization",
		"legend-1-1": "Idle Bikes Optimization",
		"legend-1-2": "Number of Vehicles",
		"legend-1-3": "Current Docks",
		"legend-2-1": "Idle Docks Optimization",
		"legend-2-2": "Recommended Dock Adj.",
		"legend-2-3": "Current Docks",
		"legend-3-1": "Reduced Dispatch Volume",
		"legend-3-2": "Dispatch Diff",
		"legend-3-3": "Current Docks",
	},
	"alternative-stations": {
		title: "Adjusting Strategies to Ensure Sufficient Bikes at All Station Clusters",
		content:
			"To make sure bikes are easily accessible, we've restructured groups of stations according to user patterns we've seen in data analysis. YouBike 2.0 stations are numerous and close together, so some stations can act as substitutes for one another, serving the people nearby. This approach of organizing station clusters helps guarantee bike availability in each area.",
		note: "Alternative Stations: Station pairs where users exhibit consistent bike borrowing or returning behavior.",
		"map-1": "Alternative Stations Analysis",
		"legend-1-1": "Transactions (Few to Many)",
		"legend-1-2": "YouBike Stations",
	},
	"village-helper": {
		title: "Recruiting Helpers to Assist in Dispatching",
		content:
			"Executing the above strategies requires additional manpower. As such, the Department of Transportation is recruiting local community helpers to assist with dispatching. Out of 31 applicants, 17 were chosen, adding more support for future dispatch tasks.",
		image: "Recruitment event, 2023/7/21",
	},
	"station-expansion": {
		title: "Assessing Potential Locations for Station Expansion in 2024",
		content:
			"Beginning in 2024, YouBike plans to steadily grow its fleet and station network, aiming for a total of 26,000 bikes and 2,000 stations. Excluding unsuitable areas like mountains, riverbanks, and areas near existing stations, about 18.6% of Taipei City still needs an evaluation to determine station demand.",
		note: "Areas near existing stations: Assuming each station can serve people within a 200-meter radius, if more than 50% of an area within a grid overlaps with these serviceable areas, then that grid is considered a non-priority.",
		"map-1": "Station Status in Each Grid",
		"legend-1-1": "Unstationed",
		"legend-1-2": "Mountainous Restrictions",
		"legend-1-3": "Land Restrictions",
		"legend-1-4": "Special Restrictions",
		"legend-1-5": "Nearby Stations Exist",
		"legend-1-6": "Usage Restrictions",
		"legend-1-7": "Stations",
	},
	"expansion-priority": {
		title: "Introducing Machine Learning to Predict Demand for Unstationed Grids",
		content:
			"Without stations, we lack data on bike usage. So, how do we determine how many bikes to deploy? We used urban data to create a machine learning model, which only has a margin of error of approximately 5.13 bikes. This estimation of potential demand offers valuable insights to station expansion planning.",
		note: "Areas near existing stations: Assuming each station can serve people within a 200-meter radius, if more than 50% of an area within a grid overlaps with these serviceable areas, then that grid is considered a non-priority.",
		"map-1": "Predicted Dock Demand in Unstationed Grids",
		"map-2": "Predicted Bike Demand in Unstationed Grids",
		"btn-1": "Docks",
		"btn-2": "Bikes",
		"legend-1-1": "Demand (low-high)",
		"legend-2-1": "Demand (low-high)",
	},
	"green-future": {
		title: "Gradually Realizing Taipei's 2030 Green Transportation Vision",
		content:
			"While we can't instantly fix the YouBike shortage, using data analysis helps us understand the problem better and find specific solutions. We're excited about blending data-driven decision-making and open-source collaboration to work towards our 2030 green transportation goal. Thanks for reading. Check out our interactive map and in-depth reports in the next page.",
	},
	"weekday-user": {
		title: "The Last Mile of Weekday Commutes",
		content:
			"During the weekday rush hours, you'll often see YouBike riders navigating through the crowds. About 4% of monthly users are regular commuters during peak times, making up 22% of all rides. 7 to 8 AM on weekdays are typically the busiest, with riders taking similar short trips.",
	},
	"commute-path": {
		title: "Transaction Data of Weekday Commuters Reveals Common Patterns",
		content: `A city's pulse is its daily commuters. Ever thought about visualizing this on a larger scale? We cleaned, categorized, and filtered YouBike transaction data, offering a broader view of user behavior. (An interactive map can be accessed in the end. Click on "Dashboard")`,
		"map-1": "Commuter Ride Patterns (Weekdays 5-10 AM)",
		"legend-1-1": "Ride Start-End",
		"legend-1-2": "MRT Stations",
	},
	"dongmen-runout": {
		title: "Late for Work? Let YouBike Cover Your Last Mile",
		content:
			"Running late and concerned about the last-minute rush? Daily commuting often comes with this challenge, especially during peak hours. A shortage of YouBikes can make the commute even tougher.",
	},
	"dongmen-full": {
		title: "Late for Work? Let YouBike Cover Your Last Mile",
		content:
			"Since the end of May, YouBike has deployed an additional 1780 bikes to 50 stations with severe bike shortages. This boosted bike availability by 16% at these stations, leading to a 7% improvement citywide. Now, even if you're running late, you can still make it to your destination on time.",
	},
	"alternative-stations-dongmen": {
		title: "No Bikes at This Station? Try an Alternative Station",
		content:
			"No bikes at a station? No worries, there's probably one nearby. YouBike 2.0 stations are conveniently close to each other, but this also makes dispatching tricky, especially during high-demand periods. By analyzing transaction data, we pinpointed alternative stations, trying to ensure at least one bike within a cluster.",
		note: "Alternative Stations: Station pairs where users exhibit consistent bike borrowing or returning behavior.",
		"map-1": "Alternative Stations Analysis",
		"legend-1-1": "Transactions (Few to Many)",
		"legend-1-2": "YouBike Stations",
	},
	"zhoumei-idle": {
		title: "Maximizing the Usage of Every Bike",
		content:
			"On your way back from work, you might see one station nearly empty and another almost full. We are aware of the issue and actively tackling it. We use data analysis to identify bikes sitting idle for too long at stations and move them to other stations in need to make sure there are bikes available for everyone.",
	},
	"zhoumei-optimized": {
		title: "Maximizing the Usage of Every Bike",
		content:
			"We keep track of how stations are used and offer recommendations to YouBike about how many bikes to deploy to each station initially and how to dispatch them throughout the day. We consider how each station is used and identify idle bikes to move to other stations. This helps make dispatching much more efficient.",
	},
	"weekday-question": {
		title: "Which Area of Our Research Interests You the Most?",
		"ans-1": "Ride Patterns",
		"ans-2": "Alternative Stations",
		"ans-3": "Idle Capacity Analysis",
		"ans-4": "Other",
	},
	"weekend-user": {
		title: "Enjoy a Leisurely Ride With YouBike on Weekends",
		content:
			"Among our many users, some ride solely for leisure purposes. These users enjoy riding along riverside paths and exploring the countryside. Although they represent just 5% of all users, they cover the longest distances.",
	},
	"leisure-path": {
		title: "Transaction Data of Weekend Riders Reveals Popular Leisure Routes",
		content:
			"When we look at transaction data, it's clear that weekend leisure riders love the riverside paths, often starting from Dadaocheng and Guandu and ending in Tamsui. To avoid crowds and also lower the risk of running into bike shortages or full stations, consider taking the reverse route from Tamsui back to Dadaocheng.",
		"map-1": "Weekend Ride Patterns",
		"legend-1-1": "Ride Start-End",
		"legend-1-2": "MRT Stations",
	},
	"model-explanation": {
		title: "Using Data to Get the Full Picture of YouBike Demand",
		content:
			"If you struggle to find bikes on the weekend, don't worry. We use data and machine learning to forecast YouBike demand in 250-meter square grids across the city. This helps ensure bikes are available when and where citizens need them.",
	},
	prediction: {
		title: "Utilizing Machine Learning to Estimate Demand and Assist Expansion Decisions",
		content:
			"We've built a machine learning model to identify suitable areas for new stations, with a prediction error of around 5.13 bikes. We then visualize the expected demand levels to help YouBike prioritize these areas, serving as a guide for on-site assessments and station expansion planning.",
		"map-1": "Predicted Dock Demand in Unstationed Grids",
		"map-2": "Predicted Bike Demand in Unstationed Grids",
		"btn-1": "Docks",
		"btn-2": "Bikes",
		"legend-1-1": "Demand (0-80)",
		"legend-2-1": "Demand (0-50)",
	},
	"convenient-isochrone": {
		title: "Riding Bikes Might Be More Convenient Than You Thought!",
		content:
			"Check out these bicycle isochrone maps and see how far you can bike in a certain time. Why not spend your free time during the weekend to explore the city with YouBike? You'll be surprised at how many places you can reach!",
		"map-1": "Taipei City Hall Bicycle Isochrone",
		"map-2": "Taipei Main Station Bicycle Isochrone",
		"map-3": "NTU Hospital Bicycle Isochrone",
		"map-4": "National Taiwan University Bicycle Isochrone",
		"btn-1": "Gov",
		"btn-2": "Tpe Stn",
		"btn-3": "NTUH",
		"btn-4": "NTU",
		"legend-1-1": "15 Mins",
		"legend-1-2": "30 Mins",
		"legend-1-3": "45 Mins",
		"legend-1-4": "60 Mins",
		"legend-2-1": "15 Mins",
		"legend-2-2": "30 Mins",
		"legend-2-3": "45 Mins",
		"legend-2-4": "60 Mins",
		"legend-3-1": "15 Mins",
		"legend-3-2": "30 Mins",
		"legend-3-3": "45 Mins",
		"legend-3-4": "60 Mins",
		"legend-4-1": "15 Mins",
		"legend-4-2": "30 Mins",
		"legend-4-3": "45 Mins",
		"legend-4-4": "60 Mins",
	},
	"weekend-question": {
		title: "When Would You Choose Public Transit and YouBike Over Cars or Motorcycles?",
		"ans-1": "Depends on the purpose",
		"ans-2": "Parking is inconvenient",
		"ans-3": "Avoid traffic",
		"ans-4": "More convenient",
	},
	credits: {
		"title-1": "Data is the Basis for",
		"title-2": "Good Policy Decisions",
		"btn-1": "Home",
		"btn-2": "Reports",
		"btn-3": "Dashboard",
		team: "Team",
		"team-1": "Data Analysis: Iima Yu",
		"team-2": "ML Model: Jack Huang",
		"team-3": "Geo Analysis: Ian Huang",
		"team-4": "Design, Articles: Chu Chen",
		"team-5": "FE Engineer: Igor Ho",
		"team-6": "Systems Engineer: Ann Shih",
		"team-7": "Consultant: Roy Lin",
		data: "Datasets",
		"data-1": "EasyCard Transactions",
		"data-2": "Cell Signal Data",
		"data-3": "Dispatches Per Hour",
		"data-4": "Initial Bike Distribution",
		"data-5": "No. of Dispatchers",
		"data-6": "YouBike Station Data",
		"data-7": "OpenStreetMap",
	},
};

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
		"legend-1-1": "Demand (0-80)",
		"legend-2-1": "Demand (0-50)",
	},
	"green-future": {
		title: "Gradually Realizing Taipei's 2030 Green Transportation Vision",
		content:
			"While we can't instantly fix the YouBike shortage, using data analysis helps us understand the problem better and find specific solutions. We're excited about blending data-driven decision-making and open-source collaboration to work towards our 2030 green transportation goal. Thanks for reading. Check out our interactive map and in-depth reports in the next page.",
	},
	"green-fsuture": {
		title: "綠運輸與未來：循證開源逐步落實2030願景",
		content:
			"儘管Youbike缺車問題無法馬上解決，但透過數據分析導入決策的流程，相較過往更能掌握全貌並對症下藥。期待結合循證治理與開源精神，讓市政能夠逐步落實2030綠運輸願景。也感謝每位耐心讀完的你，歡迎探索下一頁數據地圖以及開源成果。",
	},
	"weekday-user": {
		title: "Youbike，陪你走過周間通勤的最後一哩路",
		content:
			"周間的通勤日常，總能看到騎著Youbike的身影穿梭在人群中。在每月的使用者中，固定早晚通勤者大約占4%，卻貢獻了22%的使用量。主要的高峰時段為週間上午7-8點，並以路線規律、騎乘距離短為主要特徵。",
		"map-1": "週末休憩騎乘軌跡",
		"legend-1-1": "騎乘軌跡起迄",
		"legend-1-2": "捷運站出口",
	},
	"commute-path": {
		title: "周間通勤者群像與騎行起訖點揭密",
		content:
			"一座城市的脈動由每天通勤的市民共同組成，是否曾好奇從宏觀的視角看會是什麼樣子？臺北大數據中心視覺化YouBike借還起訖紀錄，帶大家跳脫日常視角的騎車體驗，一窺使用者全貌。（相關地圖可於文末「探索地圖」前往操作）",
		"map-1": "通勤族騎乘軌跡(5-10點)",
		"legend-1-1": "騎乘軌跡起迄",
		"legend-1-2": "捷運站出口",
	},
	"dongmen-runout": {
		title: "上班又差點來不及？交通局與微笑單車幫你最後一哩路",
		content:
			"不小心晚出門了嗎？在路上是不是還擔心著趕不上最後一分鐘？在日常通勤中，偶爾都會遇上這種棘手的狀況。尤其是在高峰時段，大家都急著趕到目的地時，但往往遇到Youbike缺車的情況，讓通勤過程變得更具挑戰性。",
	},
	"dongmen-full": {
		title: "上班又差點來不及？交通局與微笑單車幫你最後一哩路",
		content:
			"針對缺車嚴重與民眾反映的50站點，五月底交通局與微笑單車已優先投車1780台，50 站提升 16% 見車率，全市提升 7% 見車率，幫每個晚出門的你及時達陣。",
	},
	"alternative-stations-dongmen": {
		title: "這站總是借不到？用數據幫你分析替代站點",
		content:
			"這站借不到？旁邊也許會借得到。YouBike 2.0站點廣而密，方便使用的同時也讓完美調度更加困難，尤其在使用需求增加但可調度時間固定的情況下更是如此。但透過數據觀察使用者實際借還行為分析替代站點，盡量確保平常願意走過去的替代站中，至少會有一站有車。",
		note: "站點替代性：用戶在同一時段且夠近的多站之間，有一致的借車或還車行為 ",
		"map-1": "替代站點分析地圖",
		"legend-1-1": "交易 (少-多)",
		"legend-1-2": "Youbike站點",
	},
	"zhoumei-idle": {
		title: "讓每台車都不閒著，發揮最大效用",
		content:
			"下班回家的路上，看著這站幾乎沒車了，另一站卻快停滿了，也許你會疑慮：有人注意到這個情況嗎？其實有的，透過數據分析讓各站閒置過久的車現形，這些車輛都將移至他站使用，滿足大家的騎乘需求。",
	},
	"zhoumei-optimized": {
		title: "讓每台車都不閒著，發揮最大效用",
		content:
			"臺北大數據中心盤點現有站點使用情況，針對初始在站車數與調度車數給予交通局與微笑單車建議，觀察各站點使用狀況找出閒置備車並建議配置他站，減少閒置量能並優化調度工作。",
	},
	"weekday-question": {
		title: "關於研究內容，是否有你特別感興趣的地方？",
		"ans-1": "使用者群像分析",
		"ans-2": "替代站點分析",
		"ans-3": "閒置量能分析",
		"ans-4": "其他",
	},
	"weekend-user": {
		title: "讓Youbike成為周末休憩的好夥伴",
		content:
			"在眾多的共享單車使用者中，有一群以周末休閒為主的人。他們熱愛騎河濱自行車道，徜徉於山與河交織的懷抱。雖然僅占總使用人次的5%，但騎乘公里數最多，並以長時間長距離騎乘為主要特徵。",
		"map-1": "週末休憩騎乘軌跡",
		"legend-1-1": "騎乘軌跡起迄",
		"legend-1-2": "捷運站出口",
	},
	"leisure-path": {
		title: "周末休憩使用者群像與借還熱區大揭密",
		content:
			"將借還車資料的起訖視覺化分析後，可以發現週末休憩族群尤其熱愛騎乘於河濱自行車道，並以大稻埕和關渡為主要起點，淡水為主要終點。經常周末騎車借不到車嗎？換個角度切入，改從淡水騎回大稻埕， 不僅可以避開人潮，還可以減少遇到缺車或滿站的狀況。",
		"map-1": "週末休憩騎乘軌跡(全天)",
		"legend-1-1": "騎乘軌跡起迄",
		"legend-1-2": "捷運站出口",
	},
	"model-explanation": {
		title: "想去的地方沒有YouBike？用數據看見需求全貌",
		content:
			"周末出門沒有YouBike？臺北大數據中心透過數據治理，利用城市相關開放資料，按照每小時、週間和週末劃分城市為250公尺見方的網格，建立機器學習模型預測YouBike借還需求，以滿足市民未來需求。",
		image: "預測模型疊合地理空間資訊示意圖",
	},
	prediction: {
		title: "機器學習幫忙推估需求，擴站決策參考的好幫手",
		content:
			"針對未設站但可設站地區建立機器學習模型後，預測誤差約 5.13 台。相關需求高低也視覺化為優先順序，提供交通局與微笑單車參考此分析成果，可優先安排現地勘查，擬定執行擴站計畫。",
		"map-1": "未設站區域車柱需求預測",
		"map-2": "未設站區域車輛需求預測",
		"btn-1": "預測柱",
		"btn-2": "預測車",
		"legend-1-1": "需求量(0-80)",
		"legend-2-1": "需求量(0-50)",
	},
	"convenient-isochrone": {
		title: "嫌騎腳踏車麻煩？YouBike其實可能比你想像的更便利！",
		content:
			"透過單車等時圈地圖，可以看見騎乘自行車的時間與相對應騎乘範圍。不妨趁著周末有空騎上Youbike在城市中探索，你會發現其實能到的地方比想像中還多！",
		"map-1": "市政府腳踏車騎乘等時圈",
		"map-2": "北車腳踏車騎乘等時圈",
		"map-3": "內科腳踏車騎乘等時圈",
		"map-4": "臺大腳踏車騎乘等時圈",
		"btn-1": "市政府",
		"btn-2": "北車",
		"btn-3": "內科",
		"btn-4": "臺大",
		"legend-1-1": "15分鐘",
		"legend-1-2": "30分鐘",
		"legend-1-3": "45分鐘",
		"legend-1-4": "60分鐘",
		"legend-2-1": "15分鐘",
		"legend-2-2": "30分鐘",
		"legend-2-3": "45分鐘",
		"legend-2-4": "60分鐘",
		"legend-3-1": "15分鐘",
		"legend-3-2": "30分鐘",
		"legend-3-3": "45分鐘",
		"legend-3-4": "60分鐘",
		"legend-4-1": "15分鐘",
		"legend-4-2": "30分鐘",
		"legend-4-3": "45分鐘",
		"legend-4-4": "60分鐘",
	},
	"weekend-question": {
		title: "會讓你想放棄汽機車改用大眾運輸轉Youbike的情況是？",
		"ans-1": "看今天出門的目的",
		"ans-2": "目的地周遭停車不便",
		"ans-3": "不想在路上塞車",
		"ans-4": "想要輕便出門",
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

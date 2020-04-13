<img src="https://cgdv.github.io/assets/img/sunrise.jpg" alt=""/>



 
# Pandemic Data Room
## A Resource Provided by The Center for Global Data Visualization

The Pandemic Data Room is a comprehensive global COVID-19 data repository created by a consortium of partners and led by QED Group to improve understanding of the impact of physical distancing policies on social behavior, disease rates, hospital utilization, and local/national economies. This initiative will generate critical information needed to adjust policies to control the outbreak. We hope to bring amazing talent to work on the data and generate new tools that can be used to manage and understand this pandemic.

In order that the Pandemic Data Room best reflects questions being asked among the global health and international development communities, we have created a portal where people can pose questions on COVID-19 they are looking to get answered. This question portal will be available to Data Challenge  participants and they can use it to generate ideas in creating compelling visualization and analysis tools. Please visit the portal [here](https://docs.google.com/document/d/1Q-OpRV6bvZuePvF1E_DSwTr121zPoIZExkiozWw1-24/edit).  

Participate in the <a href="https://cgdv.github.io/challenges/COVID-19/" target="_blank">COVID-19 Data Challenge</a> using this data resource. Both students and professionals are encouraged to participate. For each track, submissions are judged separately and prizes (1st Place $2000, 2nd Place $1500, 3rd Place $1000, Honorable Mentions $100) are awarded. 

Contribute to the Pandemic Data Room by submitting a new data source request in this [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSdn74SkcHp3lJ6rv2QTU1VmeliwUe_d6G8H_dFvVf_J_LEeMQ/viewform). We will evaluate your data source and get back to you soon!


## Data sources provided by partners  
<details>
<summary>
<a href="https://fraym.io/">Fraym</a>: Geospatial Data For Covid-19 Prevention and Crisis Response</summary>
<p>

* Detailed Description: The risks posed by coronavirus are especially high for millions of people who live in low-and middle-income countries, where financial, medical equipment, and health personnel resources are highly constrained. 
To rapidly identify countries, cities and communities that exhibit the greatest risk of emergency cases and rapid transmission, Fraym provides access to relevant data layers including Emergency Case Risk Factors (Smoking prevalence, Elderly households, Body health - obesity, child stunting, child wasting) and Transmission Risk Factors (Population density, Household size, Occupation, Transportation modes, Hand Washing Practices).
CGDV has requested the above data layers for countries including Guatemala, Kenya, Nigeria, Pakistan, Philippines, Rwanda, Senegal, and South Africa. Each folder should have a data dictionary and a citation guide for use. Download raster files with high-resolution down to 1km2 in [CGDV Google Drive](https://drive.google.com/drive/folders/14P_mzWfNmottpzMtTpCvvuT1gkotvK5p?usp=sharing ).
* Data Resolution: Country 
* File type: TIF File
</p>
</details>

<details>
<summary>
<a href="https://www.geopoll.com//">Geopoll</a>: Coronavirus In Sub-Saharan Africa</summary>
<p>

* Detailed Description: As a research organization that conducts remote research, GeoPoll takes an initiative to assist the global response to coronavirus. From March 10th – 13th, 2020, GeoPoll administered a survey on the knowledge of and perceptions towards coronavirus in South Africa, Kenya, and Nigeria. The study was conducted among 1,350 respondents, nationally representative by location in each country and with a 50-50 gender split, and an age split of 33% ages 15-24, 35% ages 25-34, and 32% ages 35+.  
To read the full report visit [geopoll.com/blog/coronavirus-africa](geopoll.com/blog/coronavirus-africa). Download a copy of survey data in [CGDV Google Drive](https://drive.google.com/drive/folders/14P_mzWfNmottpzMtTpCvvuT1gkotvK5p?usp=sharing).
* Data Resolution: County in African countries
* File type: Excel
</p>
</details>

<details>
<summary>
<a href="http://www.exovera.com/">Exovera</a>: COVID-19 Realted Articles Published In US Newspaper </summary>
<p>

* Detailed Description: Exovera provides COVID-19 social media data through its robust API platform. Download data files in [CGDV Google Drive](https://drive.google.com/drive/folders/14P_mzWfNmottpzMtTpCvvuT1gkotvK5p?usp=sharing).
  * politics_coronavirus_rawdata_Jan012020-Apr072020.json: The US Politics dataset is a set of ~1m articles since Jan 01 2020, from ~10k sources both local/national of US newspapers/online news related to US Politics (using an Exovera Classifier that tags politics related content at a high level of recall). 
  * coronavirus_english_topSources_04072020.json: Data from the top 500 largest publishers (in English/by reach) in Exovera's overall dataset. The data is collected via API from social media posts that contain URL's from the top publishers. 
  * coronavirus_general_media_timeseries-04072020.csv: The timeseries are from Coronavirus related terms/content within all-english online News/Print media that we have access to worldwide, it encompasses 55k sources and uses an initial set of keywords to pull up content. The initial set of search terms has ~15m results with keywords 'Coronavirus', 'covid-19', 'covid19', "2019-nCoV" and "Sars-COV-2". Data are based around tagging / subtopic detection with labels applied. 
* Data Resolution: US
* File type: .json, .csv
</p>
</details>

    
## COVID-19 Case Data  
<details>
<summary>
<a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins Coronavirus Dashboard Dataset</a>: Country, foreign provinces, and U.S. county case statistics</summary>
<p>

* Detailed Description: Contains recovered, infected, and fatility case numbers for all countries, province-level for many countries, and county level for the US. Data is sourced from a variety of health organizations around the world.
* Data Resolution: Global (some province level), U.S. County
* Frequency of update: Daily
* Download Method: Download / Clone
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://github.com/CSSEGISandData/COVID-19
</p>
</details>

<details>
<summary>
<a href="https://github.com/nychealth/coronavirus-data">New York City Public Health Department</a>: Cases, hospitalizations, deaths by date of diagnosis as well as cases by ZIP code</summary>
<p>

* Detailed Description: There are a lot of files in the github repo, however only 2 datasets that I think valuable (case-hosp-death.csv and tests-by-zcta.csv). The case-hosp-death accounts cases by date of diagnosis, hospitalized and deaths in NYC hospitals. The latter dataset is cumulative positive cases per zip code
* Data Resolution: U.S., U.S. ZIP
* Frequency of update: Daily
* Download Method: Download / Clone
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://github.com/nychealth/coronavirus-data
</p>
</details>

<details>
<summary>
<a href="https://github.com/nytimes/covid-19-data">New York Times Data</a>: Two time-series datasets collected by the New York Times from various U.S. state and local agencies; the first record is aligns with the first case in the United States on 21 January 2020.</summary>
<p>

* Detailed Description: Two time-series datasets collected by the New York Times from various state and local government agencies; the first record is the first case in the United States on 21 January 2020. One dataset contains information aggregated at the state-level and the other is information broken down by county. Features contained are: date, county/state, fips, cases, and deaths. NOTE: This source only provides information about positive cases.
* Data Resolution: U.S. States, U.S. County
* Frequency of update: Daily
* Download Method: Download / Clone
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://github.com/nytimes/covid-19-data
</p>
</details>

<details>
<summary>
<a href="https://github.com/covid19india/api">INDIA COVID-19 TRACKER</a>: Crowdsourced India COVID-19 data. Some interesting points because it takes data from anyone.</summary>
<p>

* Detailed Description: This is a link to a GitHub repository that is used to crowdsource data about COVID-19 in India. The crowdsourced data has been used to make an HTML page (the link is in the GitHub repository). The data is crowdsourced through telegram, a social media type application, but it is not thoroughly validated. It is really interesting data about India, but it needs to be used appropriately in analysis. It is submitted through a social media platform, so some of it is likely incorrect, but could make fantastic supplementary data.
* Data Resolution: Country
* Frequency of update: Daily
* Download Method: Clone / API
  * File type: JSON
* Cleaning requirements: Minimal
* Link: https://github.com/covid19india/api
</p>
</details>

<details>
<summary>
<a href="https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide">European Centre for Disease Prevention and Control</a>: Dataset of positive cases and deaths by country worldwide</summary>
<p>

* Detailed Description: Contains a dataset that tracks positive cases and deaths per country. Originally a record data but could be transformed into timeseries with decent coding work
* Data Resolution: Global
* Frequency of update: Daily
* Download Method: Download
  * File type: CSV, JSON, XML
* Cleaning requirements: Minimal/Moderate
* Link: https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide
</p>
</details>

<details>
<summary>
<a href="https://ncov.dxy.cn/ncovh5/view/pneumonia">DXY</a>: A Chinese pandemic tracking online platform showing the number of cases locally and globally</summary>
<p>

* Detailed Description: Daily confirmed, deaths, and recovered cases worldwide. There is English version if click "switch to English version", but it doesn't provide dataset to download.
* Data Resolution: Global, China
* Frequency of update: Daily
* Download Method: Copy-paste
  * File type: Text
* Cleaning requirements: Significant
* Link: https://ncov.dxy.cn/ncovh5/view/pneumonia
</p>
</details>

<details>
<summary>
<a href="https://coronavirus.1point3acres.com/en">1Point3Acres covid19 dataset</a>: case based covid 19 dataset in US and Canada</summary>
<p>

* Detailed Description: The case data contains case id, confirmed date, state/province, county (for US only), confirmed case count, and death count. (Have rules on citing this source)
* Data Resolution: US(county level) and Canada
* Frequency of update: Daily
* Download Method: API(I have requested and get the API access token,  20 requests per 24 hour)
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://coronavirus.1point3acres.com/en
</p>
</details>
</details>


## Government Response Data
<details>
<summary>
<a href="https://www.kaggle.com/jcyzag/covid19-lockdown-dates-by-country#countryLockdowndates.csv">Worldwide Lockdown Dataset</a>: Country and province stay-at-home order data</summary>
<p>

* Detailed Description: 2 files. List of lockdown dates for each countries. A lockdown is assumed to be complete when all schools and non-essential businesses are closed. References for each country are also listed for where the information was found. Some rows contain blank provinces if it pertains to the whole nation.
* Data Resolution: Global, 
* Frequency of update: Static? (updated 3 days ago)
* Download Method: Download
  * File type: CSV
* Cleaning requirements: Minimal/Moderate
* Link: https://www.kaggle.com/jcyzag/covid19-lockdown-dates-by-country#countryLockdowndates.csv
</p>
</details>

<details>
<summary>
<a href="https://www.kaggle.com/lin0li/us-lockdown-dates-dataset">US Lockdown Dataset</a>: State and county stay-at-home order data</summary>
<p>

* Detailed Description: Dates of when is each state / county's stay-at-home order becomes effective as a result of the covid-19 pandemic. This dataset is updated daily as more states & counties issue stay-at-home order. Some rows contain blank counties if it pertains to the whole state.
* Data Resolution: U.S. States, U.S. County
* Frequency of update: Daily
* Download Method: Download
  * File type: CSV
* Cleaning requirements: Minimal/Moderate
* Link: https://www.kaggle.com/lin0li/us-lockdown-dates-dataset
</p>
</details>

## Healthcare Resource Data
<details>
<summary>
<a href="https://coronavirus-disasterresponse.hub.arcgis.com/datasets/definitivehc::definitive-healthcare-usa-hospital-beds/data?geometry=94.394%2C-16.820%2C-119.356%2C72.123&page=10">USA Hospital Beds</a>: County level data.Contains hospital beds related data(amount, untility rate, bed type, etc)as well as hospital geographic data</summary>
<p>

* Detailed Description: Contains hospital beds related data(amount, untility rate, bed type, etc)as well as hospital geographic data
* Data Resolution: US county
* Frequency of update: Daily(not sure, last updated 'yesterday')
* Download Method: Download
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://coronavirus-disasterresponse.hub.arcgis.com/datasets/definitivehc::definitive-healthcare-usa-hospital-beds/data?geometry=94.394%2C-16.820%2C-119.356%2C72.123&page=10
</p>
</details>


<details>
<summary>
<a href="https://github.com/covidcaremap/covid19-healthsystemcapacity/tree/master/data/published">US Hospital Facility Bed Capacity</a>: Includes information about all hospitals bed and ventilators per capita, health care capacity data etc</summary>
<p>

* Detailed Description: High quality data on US hospitals capacity including beds per capita, covid care data etc.
* Data Resolution: US county
* Frequency of update: Last updated on april 7
* Download Method: Clone
  * File type: CSV/geojson
* Cleaning requirements: Minimal
* Link: https://github.com/covidcaremap/covid19-healthsystemcapacity/tree/master/data/published
</p>
</details>


<details>
<summary>
<a href="https://datarepository.wolframcloud.com/resources/Patient-Medical-Data-for-Novel-Coronavirus-COVID-19">Patient Medical Data for COVID-19</a>: Medical records of patients infected with COVID-19</summary>
<p>

* Detailed Description: Patient record including age, sex, location, date of onset, symptoms, travel history, chronic diseases, and date of discharge or death.
* Data Resolution: Global
* Frequency of update: Last updated on April 1
* Download Method: Download
  * File type: CSV/JSON
* Cleaning requirements: Minimal
* Link: https://datarepository.wolframcloud.com/resources/Patient-Medical-Data-for-Novel-Coronavirus-COVID-19
</p>
</details>

<details>
<summary>
<a href="https://www.kaggle.com/danevans/world-bank-wdi-212-health-systems">WDI Health Systems</a>: Data on the state of each countries healthcare system.</summary>
<p>
 
* Detailed Description: The stated purpose for this data is "Does health spending levels (public or private), or hospital staff have any effect on the rate at which Covid-19 spreads in a country? Can we use this data to predict the rate at which Cases or Fatalities will grow?". It is only data on healthcare expenditures and the amount of healthcare available in countries throughout the world. There is not any direct COVID-19 data, but this could make good supplementary data for a question similar to one they posed as inspiration
* Data Resolution: Global
* Frequency of update: Every 2-3 Days
* Download Method: Download
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://www.kaggle.com/danevans/world-bank-wdi-212-health-systems
</p>
</details>

## Social Data
<details>
<summary>
<a href="https://trends.google.com/trends/?geo=US">Google Trends</a>: Data on the trends in people's google searches.</summary>
<p>

* Detailed Description: GoogleTrends data is phenomenal, it is interesting, important, and can be so insightful, IF IT IS USED CORRECTLY. It can be a little confusing the first time you see it, and the instructions given will help you understand the graphs presented on the GoogleTrends page when you input a search term. However, figuring out how to use it further and get more from it, is not super clear. All of the data is given in search intensity, scaled from 0 to 100, where 100 is the maximum search intensity. The maximum search intensity does not give you any information about the actual number of searches, that number is that search terms peak in searches, then everything else is scaled to that value. A search intensity of 50 means that term was searched half as many times as the search intensity of 100. 

Now, lets put that in context, google trends allows you to vary the time period, regional resolution, and the search term(s).
    - You can specify a time period of any range dating back to 2014.
        - Time periods of less than a week will return hourly data
        - Time periods over a week, but less than 269 days (about 9 months, but using 8 is safe) returns daily data
        - Time periods over 269 days return weekly data
    - You can choose the whole world or a specific country
        - The whole world will give you country level comparisons
        - Different countries have different levels you can compare from, for example U.S. has a default of comparing states, but you can also choose to compare by metro region.


Let's start with relative search intensities (i.e. comparing different searches):
    - You will specify a time period, and what is returned may be hourly, daily or weekly search intensities.
    - Only one term is going to reach 100 over that time period. This represents the highest search intensity for that term, and any of the other terms you are comparing.
    - Then every other search intensity is scaled from that point. No matter what term you are looking at in a relative search intensity on GoogleTrends it's search intensity = # searches for that term / # searches at the peak search intensity (100)
    - GoogleTrends allows you to compare up to five words or phrases at one time. There are ways to overlap time periods and search terms together to get a pretty good estimate to compare from, but DO NOT DO THIS UNLESS IT IS ABSOLUTELY NECESSARY. It is very difficult, and a tiny mistake makes all of your data innaccurate.

Regional Search Intensities (comparing a terms search intensity based on location):
    - You enter a search term and you can specify whether it is the whole world, or one particular country.
    - GoogleTrends gives you colored maps representing this data.
    - What the actual data has for you is similar to the relative search intensities.
    - Only one region in the region and time period you specified will be reach 100.
    - The rest of the regions are scaled the same way as relative search intensity to that moment and regions search intensity

*** You can also do regional searches that compare multiple terms, and it is really interesting. However, manipulation of that data is even more difficult, and requires a lot of attention to unravel. It is very easy to make a small mistake, and that small mistake will echo throughout all of the data, again making it worthless.

This is just a brief summary of the data given, and what I have found to be the things to watch out for, look at google trends descriptions as well for details specific to their user interface. If you still feel like you want to dive deeper into some of this data, there is a library full of research articles using the data and webpages dedicated to some manipulation of the data to get more out of it. I will just warn you to be careful, the manipulation, overlapping and other methods to change the data are always approximations, and not always correct, so read them thoughourly and check that they validated their method in some clear and accurate way.
* Data Resolution: Global, Country Level, U.S. State Level, U.S. Metro Region Level, Other Countries Have Unique Regional Breakdowns
* Frequency of update: Daily
* Download Method: Download / API (pytrends)
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://trends.google.com/trends/?geo=US
</p>
</details>


<details>
<summary>
<a href="https://covid-19-apis.postman.com/">Postman: COVID-19 API Resource Center</a>: Contains links and detailed information about accessing public feeds from 28 different organizations and topics via application program interfaces (API). Organizations represented include the WHO, CDC, and John Hopkins University.</summary>
<p>

* Detailed Description: Contains links and detailed information about accessing public feeds from 28 different organizations and topics via application program interfaces (API). This site contains information to connect to feeds from the WHO, CDC, COVID Tracking Project, and John Hopkins University COVID Database just to name a few. There are examples of how to access an organization's Twitter and Youtube feed, however individuals must have the requisite API Key / Access Tokens to access the information contained on those sites. 
* Data Resolution: Various
* Frequency of update: nan
* Download Method: API
  * File type: Various
* Cleaning requirements: Significant
* Link: https://covid-19-apis.postman.com/
</p>
</details>

<details>
<summary>
<a href="nan">SafeGraph Dataset</a>: Data on foot traffic throughout the US. It has the number of times people pass by over 6 million different points of interest in the US.</summary>
<p>

* Detailed Description: This Data is based on businesses and consumer hot spots. It uses over 6 million points throughout the US and tracks the amount of foot traffic at each of these points. They give data like number of visitors over a certain period, and also offer shapefiles for mapping or any locational visualizations.
* Data Resolution: US Points of Interest
* Frequency of update: Daily
* Download Method: Download
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://www.safegraph.com/covid-19-data-consortium
</p>
</details>


<details>
<summary>
<a href="https://github.com/thepanacealab/covid19_twitter/tree/master/dailies/2020-03-22">Covid-19 Twitter dataset</a>: Dataset of tweets acquired from the Twitter Stream related to COVID-19 chatter</summary>
<p>

* Detailed Description: Interesting dataset of social media, including daily top 1000 terms, bigrams, trigrams etc., also contains cleaned version on tweet text. Tweets languages including English Spanish and French
* Data Resolution: Global
* Frequency of update: every 2 days
* Download Method: Clone
  * File type: CSV
* Cleaning requirements: Minmal
* Link: https://github.com/thepanacealab/covid19_twitter/tree/master/dailies/2020-03-22
</p>
</details>

<details>
<summary>
<a href="https://www.notion.so/Schools-affected-by-COVID-19-a28139cb40814869a2cd64cc9453d82c">Schools affected by COVID-19</a>: Dataset of Higher Education schools moving to online-only instruction due to COVID-19</summary>
<p>

* Detailed Description: nan
* Data Resolution: US county
* Frequency of update: Last updated March 27
* Download Method: Download
  * File type: CSV
* Cleaning requirements: Minmal
* Link: https://www.notion.so/Schools-affected-by-COVID-19-a28139cb40814869a2cd64cc9453d82c
</p>
</details>

<details>
<summary>
<a href="https://www.quorum.us/spreadsheet/external/QCKYcPmSvYoAhnkIdcSS/">COVID-19 Legislation</a>: Interactive site for users to access: statewide or nationwide data on all covid-19 legislation</summary>
<p>

* Detailed Description: Queryable and downloadable data pertaining to United States COVID-19 legislation. The data contains name of the bill, the region it spans, description of the legislation, link to the source, status, last action, date of last action, type (house/senate/other), the internal quorum link.
* Data Resolution: U.S. States, U.S.
* Frequency of update: At least daily
* Download Method: Download
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://www.quorum.us/spreadsheet/external/QCKYcPmSvYoAhnkIdcSS/
</p>
</details>

<details>
<summary>
<a href="https://help.cuebiq.com/hc/en-us/articles/360041350092-Cuebiq-Mobility-Visit-Index-Feed-Specs#h_e4633fc1-3206-4ee5-a3b8-6f7735e22c7e">Coebiq Mobility Index Data</a>: Dataset shows mobility and store visitation patterns</summary>
<p>

* Detailed Description: This data representing the level of movement within each specific county in the U.S. 
* Data Resolution: US county
* Frequency of update: Daily
* Download Method: AWS S3 (premier account of Coebiq needed)
  * File type: CSV
* Cleaning requirements: Minimal
* Link: https://help.cuebiq.com/hc/en-us/articles/360041350092-Cuebiq-Mobility-Visit-Index-Feed-Specs#h_e4633fc1-3206-4ee5-a3b8-6f7735e22c7e
</p>
</details>


<details>
<summary>
<a href="https://www.google.com/covid19/mobility/">Google COVID-19 Community Mobility Reports</a>: See how your community is moving around differently due to COVID-19</summary>
<p>

* Detailed Description: These Community Mobility Reports aim to provide insights into what has changed in response to policies aimed at combating COVID-19. The reports chart movement trends over time by geography, across different categories of places such as retail and recreation, groceries and pharmacies, parks, transit stations, workplaces, and residential. 
* Data Resolution: 
* Frequency of update: 
* Download Method: 
  * File type: 
* Cleaning requirements: 
* Link: https://www.google.com/covid19/mobility/
</p>
</details>



## Academic Data

<details>
<summary>
<a href="https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge#metadata.csv">Scholarly Article Database</a>: Big database of scholarly article metadata with links and queryable json files for Natural Language Processing</summary>
<p>

* Detailed Description: This dataset combines 44k+ scholarly articles/literature pertaining to the coronavirus. It can be used to analyze the main authors, sources, titles, journal and abstract for the analyst to look into. Each row provides a link to the article if Natural Language Processing should be a desired task. 
* Data Resolution: U.S.
* Frequency of update: Static
* Download Method: Download/Embedded link
  * File type: JSON
* Cleaning requirements: Significant
* Link: https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge#metadata.csv
</p>
</details>

## COVID-19 Interactive Dashboard
* [Johns Hopkins CSSE: Interactive web-based dashboard tracking reported cases](https://coronavirus.jhu.edu/map.html)
* [Live World Health Organization Dashboard](https://who.sprinklr.com/)
* [Tableau Coronavirus Daily Global Tracker](https://www.tableau.com/covid-19-coronavirus-data-resources)



  
    
 ##  Experts' Thoughts on Dealing with COVID-19 Data
 In working with COVID-19 Data, we encourage you to recognize both the limitations of the data and your ability to draw conclusions from the list data. The articles below provide some insights on the challenges of COVID-19 data.  
 * [You are (almost definitely) not qualified to make predictions about COVID-19. We’re here to help explain why](
https://www.tableau.com/about/blog/2020/4/you-are-almost-definitely-not-qualified-make-predictions-about-covid-19
), by Andy Cotgreave
* [Visualizing coronavirus data? Consider adding a disclaimer](https://www.tableau.com/about/blog/2020/4/visualizing-coronavirus-data-consider-adding-disclaimer), by Amanda Makulec  
* [Display New Daily Cases of COVID-19 with Care](https://www.perceptualedge.com/blog/?p=3123), by Stephen Few  
* [10 considerations before you create another chart about COVID-19](https://www.tableau.com/about/blog/2020/3/ten-considerations-you-create-another-chart-about-covid-19), by Amanda Makulec
* [Coronavirus Case Counts Are Meaningless*](https://fivethirtyeight.com/features/coronavirus-case-counts-are-meaningless/), by Nate Silver  
* [Rates of change are tricky](http://www.thefunctionalart.com/2020/03/rates-of-change-are-tricky.html), by Alberto Cairo  

  
  



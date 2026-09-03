export const REPORT_CONFIG = {
  reportDate: "Sep 3, 2026",
  reportTitle: "Backlink Performance Summary Report",
  reportSubtitle: "Country: US | Source: Ahrefs, GSC",
  dataSource: "Ahrefs, GSC",
  country: "US",
};

// ============================================================================
// MONTH CONFIGURATION - CENTRALIZED
// ============================================================================
// ⭐ UPDATE ALL MONTH-RELATED DATA HERE ⭐
//
// This is the single source of truth for all month-related data.
// Update these arrays when you need to change the time period.

// Main months array (used for performanceData monthlyData arrays)
// Array indices: 0=Dec'24, 1=Jan'25, 2=Feb'25, ..., 10=Oct'25
export const months: string[] = [
  "Dec'25",
  "Feb'26",
];

// Extended months array (used for trend charts with more historical data)
// Contains 16 months from Jul'24 to Oct'25
export const extendedMonths = [
  "Jul'24",
  "Aug'24",
  "Sep'24",
  "Oct'24",
  "Nov'24",
  "Dec'24",
  "Jan'25",
  "Feb'25",
  "Mar'25",
  "Apr'25",
  "May'25",
  "Jun'25",
  "Jul'25",
  "Aug'25",
  "Sep'25",
  "Oct'25",
  "Nov'25",
  "Dec'25",
  "Feb'26",
  "Mar'26",
  "Apr'26",

 
];

// Month indices for baseline and current comparison
// These reference the 'months' array above
// baseline: index 1 = "Jan'25"
// current: index 11 = "Nov'25"
export const MONTH_INDICES = {
  baseline: 1, // Index in 'months' array for baseline period
  current: 11, // Index in 'months' array for current period
};

// Month labels for display (used in charts and UI)
// These should match the months at MONTH_INDICES.baseline and MONTH_INDICES.current
export const MONTH_LABELS = {
  baseline: "Dec 2025 (Baseline)", // Display label for baseline month
  current: "August 2026", // Display label for current month
};

export const DASHBOARD_STATS = {
  urlsTracked: 15,
  totalBacklinks: 381,
  keywordsTracked: 35,
  PlanTotalBacklinks : 430,
};

export const KEY_FINDINGS = [
  {
    title: "High-Authority Backlink Acquisition",
    description:
      "**Approximately 89% of referring domains have a DA between 41–100**, reflecting a strong backlink profile supported by authoritative and credible websites.",
    icon: "fas fa-shield-alt",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Domain Authority Improvement",
    description:
      "**Domain authority improved for two referring domains**, with the DA increasing from **41 to 42 for 'anydesk pricing'** and from **47 to 48 for 'remote access software'**.",
    icon: "fas fa-arrow-trend-up",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Strong Performance Across Competitor Keywords",
    description:
      "**Competitor keywords continue to perform strongly**, with **'anydesk pricing (4)'**, **'teamviewer alternative (5)'**, and **'teamviewer pricing (5)'** ranking in the top 5, while **'anydesk alternative (7)'** maintains a top 10 position.",
    icon: "fas fa-chart-line",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Sustained Visibility on Core Keywords",
    description:
      "**Remote access and support keywords continue to maintain strong visibility**, with **'remote access (5)'** ranking in the top 5 and **'remote support (10)'** securing a first-page position.",
    icon: "fas fa-bullseye",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
];


export const BUSINESS_IMPACT_CONFIG = {
  topKeywordsCount: 18,
  // chartTitle: "Critical Keywords",
  chartSubtitle: "Critical keywords Performance",
  insightText: [
  "Remote access and remote desktop keywords continue to deliver strong visibility, with 'remote access (5)' maintaining a top 5 position, while 'remote desktop (29)' continues to rank within the top 30.",
  "Competitor keywords continue to strengthen, with 'anydesk pricing (4)' and 'teamviewer alternative (5)' ranking in the top 5, while 'teamviewer pricing (5)' maintains its top 5 position and 'anydesk alternative (7)' moves into the top 10.'teamviewer pricing (5)' now ranking in the top 5, while 'teamviewer alternative (9)' maintains a first-page position. ",
  "Patch management is showing significant improvement, moving from position 62 to 8 and securing a first-page ranking. "
],
  trendChartTitle: "Ranking Performance Trend",
  trendKeyTakeaway:
    "Remote Desktop Software: 10 backlinks added in June boosted its ranking to page 1. \n\nRemote Access: 30 backlinks were added in Jan, helping maintain a stable position on page 1.",
};

export const REFERRING_DOMAINS_CONFIG = {
  qualityStatement:
    "Approximately 89% of referring domains fall within the DA 41–100 range, reflecting a strong and credible backlink profile supported by high-quality, authoritative referring websites. ",
};

export const IMPLEMENTATION_CONFIG = {
  sheetUrl:
    "https://docs.google.com/spreadsheets/d/1n4DS4gZ-HHtsGh5CXGdxUHXd8dlTbX01LcWD3OHnGxM/edit?gid=0#gid=0",
  sheetLinkText: "Detailed Monthly Backlink Sheet",
};

export const IMAGE_PATHS = {
  splashtopLogo: "/splashtop_image.png",
  leadwalnutLogo: "/LeadWalnut light logo with tagline 3.png",
};

export const UI_TEXT = {
  keywordPerformance: {
    title: "Keyword Ranking Performance",
    top3Title: "Keywords in Top 5 Positions",
    firstPageTitle: "Keywords on Page 1",
    noKeywords: "No keywords in this category.",
  },
  performanceSummary: {
    title: "Performance Summary - URL wise Breakdown",
  },
  backlinkGrowth: {
    title: "Backlink Acquisition - Monthly Growth Trend",
  },
  referringDomains: {
    title: "Backlink Quality Assurance",
    subtitle: "Referring Domains DA",
  },
  businessImpact: {
    title: "Business Impact of Backlinks",
  },
  implementationDetails: {
    title: "Backlink Acquisition Details",
  },
  backlinkBestPractices: {
    title: "Backlink Best Practices",
  },
};

export type RawTag = {
  id: number;
  name: string;
  tagId: number;
  tagSlug: string;
  stats: {
    totalFundraise: number;
    companyCount: number;
    totalFundraiseMedian: number;
  };
  isFollowed: boolean;
};

export type RawTags = Array<RawTag>;

// Range=2022, imported at 2022/05/23
export const data: RawTags = [
  {
    id: 5,
    name: "\u4eba\u5de5\u77e5\u80fd",
    tagId: 157,
    tagSlug: "ai",
    stats: {
      totalFundraise: 57942365,
      companyCount: 110,
      totalFundraiseMedian: 199982.5,
    },
    isFollowed: false,
  },
  {
    id: 6,
    name: "SaaS",
    tagId: 137,
    tagSlug: "saas",
    stats: {
      totalFundraise: 56998289,
      companyCount: 79,
      totalFundraiseMedian: 289824.0,
    },
    isFollowed: false,
  },
  {
    id: 9,
    name: "\u30d8\u30eb\u30b9\u30b1\u30a2",
    tagId: 264,
    tagSlug: "healthcare",
    stats: {
      totalFundraise: 11004767,
      companyCount: 50,
      totalFundraiseMedian: 100000.0,
    },
    isFollowed: false,
  },
  {
    id: 8,
    name: "FinTech",
    tagId: 4,
    tagSlug: "fintech",
    stats: {
      totalFundraise: 43454080,
      companyCount: 47,
      totalFundraiseMedian: 220000.0,
    },
    isFollowed: true,
  },
  {
    id: 7,
    name: "IoT",
    tagId: 168,
    tagSlug: "iot",
    stats: {
      totalFundraise: 21327721,
      companyCount: 46,
      totalFundraiseMedian: 150000.0,
    },
    isFollowed: false,
  },
  {
    id: 14,
    name: "e\u30b3\u30de\u30fc\u30b9",
    tagId: 149,
    tagSlug: "e-commerce",
    stats: {
      totalFundraise: 9785733,
      companyCount: 46,
      totalFundraiseMedian: 175436.0,
    },
    isFollowed: false,
  },
  {
    id: 11,
    name: "HRTech",
    tagId: 120,
    tagSlug: "hrtech",
    stats: {
      totalFundraise: 17218369,
      companyCount: 37,
      totalFundraiseMedian: 180325.0,
    },
    isFollowed: false,
  },
  {
    id: 12,
    name: "\u30b3\u30f3\u30c6\u30f3\u30c4",
    tagId: 258,
    tagSlug: "content",
    stats: {
      totalFundraise: 8341833,
      companyCount: 35,
      totalFundraiseMedian: 109977.0,
    },
    isFollowed: false,
  },
  {
    id: 19,
    name: "\u30d0\u30a4\u30aa\u30c6\u30af\u30ce\u30ed\u30b8\u30fc",
    tagId: 398,
    tagSlug: "biotechnology",
    stats: {
      totalFundraise: 19577648,
      companyCount: 31,
      totalFundraiseMedian: 134880.0,
    },
    isFollowed: false,
  },
  {
    id: 31,
    name: "\u98df\u54c1",
    tagId: 570,
    tagSlug: "food-and-beverage",
    stats: {
      totalFundraise: 6955355,
      companyCount: 25,
      totalFundraiseMedian: 118431.5,
    },
    isFollowed: false,
  },
  {
    id: 10,
    name: "\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0",
    tagId: 173,
    tagSlug: "marketing",
    stats: {
      totalFundraise: 14194955,
      companyCount: 24,
      totalFundraiseMedian: 246926.0,
    },
    isFollowed: false,
  },
  {
    id: 18,
    name: "\u30b7\u30a7\u30a2\u30ea\u30f3\u30b0\u30a8\u30b3\u30ce\u30df\u30fc",
    tagId: 108,
    tagSlug: "sharing-economy",
    stats: {
      totalFundraise: 7926008,
      companyCount: 22,
      totalFundraiseMedian: 200000.0,
    },
    isFollowed: false,
  },
  {
    id: 16,
    name: "CleanTech",
    tagId: 128,
    tagSlug: "cleantech",
    stats: {
      totalFundraise: 15024880,
      companyCount: 22,
      totalFundraiseMedian: 139500.0,
    },
    isFollowed: false,
  },
  {
    id: 13,
    name: "\u30d3\u30c3\u30b0\u30c7\u30fc\u30bf",
    tagId: 164,
    tagSlug: "big-data",
    stats: {
      totalFundraise: 16253223,
      companyCount: 18,
      totalFundraiseMedian: 499890.0,
    },
    isFollowed: false,
  },
  {
    id: 22,
    name: "\u4e0d\u52d5\u7523",
    tagId: 269,
    tagSlug: "real-estate",
    stats: {
      totalFundraise: 6067804,
      companyCount: 17,
      totalFundraiseMedian: 300000.0,
    },
    isFollowed: false,
  },
  {
    id: 17,
    name: "\u7d20\u6750",
    tagId: 521,
    tagSlug: "raw-materials",
    stats: {
      totalFundraise: 15523495,
      companyCount: 17,
      totalFundraiseMedian: 129600.0,
    },
    isFollowed: false,
  },
  {
    id: 21,
    name: "EdTech",
    tagId: 126,
    tagSlug: "edtech",
    stats: {
      totalFundraise: 3148010,
      companyCount: 17,
      totalFundraiseMedian: 77500.0,
    },
    isFollowed: false,
  },
  {
    id: 24,
    name: "\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3",
    tagId: 220,
    tagSlug: "fashion",
    stats: {
      totalFundraise: 4382048,
      companyCount: 17,
      totalFundraiseMedian: 90000.0,
    },
    isFollowed: false,
  },
  {
    id: 25,
    name: "\u30b2\u30fc\u30e0",
    tagId: 362,
    tagSlug: "game",
    stats: {
      totalFundraise: 6799011,
      companyCount: 15,
      totalFundraiseMedian: 109988.5,
    },
    isFollowed: false,
  },
  {
    id: 29,
    name: "AgriTech",
    tagId: 130,
    tagSlug: "agritech",
    stats: {
      totalFundraise: 2399654,
      companyCount: 15,
      totalFundraiseMedian: 120373.0,
    },
    isFollowed: false,
  },
  {
    id: 28,
    name: "SalesTech",
    tagId: 129,
    tagSlug: "salestech",
    stats: {
      totalFundraise: 9055665,
      companyCount: 14,
      totalFundraiseMedian: 289824.0,
    },
    isFollowed: false,
  },
  {
    id: 23,
    name: "\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",
    tagId: 380,
    tagSlug: "security",
    stats: {
      totalFundraise: 4836039,
      companyCount: 13,
      totalFundraiseMedian: 105550.0,
    },
    isFollowed: false,
  },
  {
    id: 15,
    name: "\u5b87\u5b99",
    tagId: 467,
    tagSlug: "space",
    stats: {
      totalFundraise: 10557189,
      companyCount: 12,
      totalFundraiseMedian: 200000.0,
    },
    isFollowed: false,
  },
  {
    id: 27,
    name: "\u88fd\u9020\u696d",
    tagId: 537,
    tagSlug: "manufacturing-industries",
    stats: {
      totalFundraise: 2840000,
      companyCount: 11,
      totalFundraiseMedian: 150000.0,
    },
    isFollowed: false,
  },
  {
    id: 26,
    name: "\u5efa\u8a2d",
    tagId: 192,
    tagSlug: "construction",
    stats: {
      totalFundraise: 1603147,
      companyCount: 10,
      totalFundraiseMedian: 80000.0,
    },
    isFollowed: false,
  },
  {
    id: 20,
    name: "\u30ed\u30b8\u30b9\u30c6\u30a3\u30af\u30b9",
    tagId: 433,
    tagSlug: "logistics",
    stats: {
      totalFundraise: 1310900,
      companyCount: 9,
      totalFundraiseMedian: 75000.0,
    },
    isFollowed: false,
  },
  {
    id: 30,
    name: "\u65c5\u884c",
    tagId: 200,
    tagSlug: "travel",
    stats: {
      totalFundraise: 777362,
      companyCount: 8,
      totalFundraiseMedian: 49966.0,
    },
    isFollowed: false,
  },
  {
    id: 32,
    name: "AutoTech",
    tagId: 132,
    tagSlug: "automotivetech",
    stats: {
      totalFundraise: 1739424,
      companyCount: 8,
      totalFundraiseMedian: 192500.0,
    },
    isFollowed: false,
  },
];

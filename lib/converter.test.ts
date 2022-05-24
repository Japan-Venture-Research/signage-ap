import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";

import { summarize, toOneMillionYen, TagSummaries } from "./converter.ts";

const RAW_DATA = [
  {
    id: 5,
    name: "人工知能",
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
];

const CONVERTED_DATA: TagSummaries = [
  {
    label: "人工知能",
    slug: "ai",
    totalFundraise: 57942.37,
    companyCount: 110,
    totalFundraiseMedian: 199.98,
  },
  {
    label: "SaaS",
    slug: "saas",
    totalFundraise: 56998.29,
    companyCount: 79,
    totalFundraiseMedian: 289.82,
  },
];

Deno.test("summarize() converts given data", () => {
  const actual = summarize(RAW_DATA);
  assertEquals(actual, CONVERTED_DATA);
});

Deno.test("toOneMillionYen() converts unit", () => {
  assertEquals(toOneMillionYen(57942365), 57942.37);
  assertEquals(toOneMillionYen(56998289), 56998.29);
  assertEquals(toOneMillionYen(53238296), 53238.3);
});

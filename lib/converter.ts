import { round } from "https://deno.land/x/math@v1.1.0/mod.ts";

import { RawTags, RawTag } from "./data.ts";

export type TagSummary = {
  label: string;
  slug: string;
  totalFundraise: number;
  companyCount: number;
  totalFundraiseMedian: number;
};

export type TagSummaries = Array<TagSummary>;

export const summarize = (tags: RawTags): TagSummaries => {
  return tags.map((tag: RawTag) => ({
    label: tag.name,
    slug: tag.tagSlug,
    totalFundraise: toOneMillionYen(tag.stats.totalFundraise),
    companyCount: tag.stats.companyCount,
    totalFundraiseMedian: toOneMillionYen(tag.stats.totalFundraiseMedian),
  }));
};

// 千円単位から百万円単位への変換
export const toOneMillionYen = (amount: number): number => {
  return parseFloat(round(amount / 1000, 2));
};

import { MicroCMSQueries, createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

export const getBlogList = async (queries?: MicroCMSQueries) => {
  let data = await client.get({ endpoint: "blogs", queries });
  return data;
};

export const getBlogDetail = async (id: string) => {
  let data = client.get({
    endpoint: "blogs",
    contentId: id,
  });
  return data;
};

import { Queue } from "bullmq";

const queue = new Queue("sample-queue");

await queue.add(
  "job-name",
  { data: process.argv[2] },
  { delay: Number(process.argv[3]) }
);

await queue.close();

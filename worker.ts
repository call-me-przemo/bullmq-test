import { Worker } from "bullmq";

const worker = new Worker(
  "sample-queue",
  async (job) => {
    console.log(job.id);
    console.log(job.data);
  },
  { connection: {} }
);

const { Worker } = require('bullmq');

const myWorker = new Worker('my-queue', async (job) => {
  // Do something with the job data
  console.log(job.data);
  // Return a result or throw an error
  return 'Job done';
});

myWorker.on('completed', (job) => {
  // Do something when a job is completed
  console.log(`Job ${job.id} completed`);
});

myWorker.on('failed', (job, err) => {
  // Do something when a job fails
  console.log(`Job ${job.id} failed with error ${err.message}`);
});

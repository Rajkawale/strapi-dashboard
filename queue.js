const Queue = require('bullmq').Queue;

const myQueue = new Queue('my-queue', {
  connection: {
    host: 'red-cip9tmd9aq0dcpohv48g',
    port: 6379
  }
});

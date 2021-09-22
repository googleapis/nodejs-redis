// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(updateMask, instance) {
  // [START redis_update_instance_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Mask of fields to update. At least one path must be supplied in
   *  this field. The elements of the repeated paths field may only include these
   *  fields from [Instance][google.cloud.redis.v1.Instance]:
   *   *   `displayName`
   *   *   `labels`
   *   *   `memorySizeGb`
   *   *   `redisConfig`
   */
  // const updateMask = ''
  /**
   *  Required. Update description.
   *  Only fields specified in update_mask are updated.
   */
  // const instance = ''

  // Imports the Redis library
  const {CloudRedisClient} = require('@google-cloud/redis').v1;

  // Instantiates a client
  const redisClient = new CloudRedisClient();

  async function updateInstance() {
    // Construct request
    const request = {
      updateMask,
      instance,
    };

    // Run request
    const [operation] = await redisClient.updateInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateInstance();
  // [END redis_update_instance_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

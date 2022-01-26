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

function main(name, rescheduleType) {
  // [START redis_v1beta1_generated_CloudRedis_RescheduleMaintenance_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Redis instance resource name using the form:
   *      `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
   *  where `location_id` refers to a GCP region.
   */
  // const name = 'abc123'
  /**
   *  Required. If reschedule type is SPECIFIC_TIME, must set up schedule_time as well.
   */
  // const rescheduleType = {}
  /**
   *  Optional. Timestamp when the maintenance shall be rescheduled to if
   *  reschedule_type=SPECIFIC_TIME, in RFC 3339 format, for
   *  example `2012-11-15T16:19:00.094Z`.
   */
  // const scheduleTime = {}

  // Imports the Redis library
  const {CloudRedisClient} = require('@google-cloud/redis').v1beta1;

  // Instantiates a client
  const redisClient = new CloudRedisClient();

  async function callRescheduleMaintenance() {
    // Construct request
    const request = {
      name,
      rescheduleType,
    };

    // Run request
    const [operation] = await redisClient.rescheduleMaintenance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRescheduleMaintenance();
  // [END redis_v1beta1_generated_CloudRedis_RescheduleMaintenance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

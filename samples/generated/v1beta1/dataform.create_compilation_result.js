// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, compilationResult) {
  // [START dataform_v1beta1_generated_Dataform_CreateCompilationResult_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The repository in which to create the compilation result. Must be in the
   *  format `projects/* /locations/* /repositories/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The compilation result to create.
   */
  // const compilationResult = {}

  // Imports the Dataform library
  const {DataformClient} = require('@google-cloud/dataform').v1beta1;

  // Instantiates a client
  const dataformClient = new DataformClient();

  async function callCreateCompilationResult() {
    // Construct request
    const request = {
      parent,
      compilationResult,
    };

    // Run request
    const response = await dataformClient.createCompilationResult(request);
    console.log(response);
  }

  callCreateCompilationResult();
  // [END dataform_v1beta1_generated_Dataform_CreateCompilationResult_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
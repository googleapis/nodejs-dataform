// Copyright 2023 Google LLC
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

function main(name, author) {
  // [START dataform_v1alpha2_generated_Dataform_CommitWorkspaceChanges_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The workspace's name.
   */
  // const name = 'abc123'
  /**
   *  Required. The commit's author.
   */
  // const author = {}
  /**
   *  Optional. The commit's message.
   */
  // const commitMessage = 'abc123'
  /**
   *  Optional. Full file paths to commit including filename, rooted at workspace root. If
   *  left empty, all files will be committed.
   */
  // const paths = 'abc123'

  // Imports the Dataform library
  const {DataformClient} = require('@google-cloud/dataform').v1alpha2;

  // Instantiates a client
  const dataformClient = new DataformClient();

  async function callCommitWorkspaceChanges() {
    // Construct request
    const request = {
      name,
      author,
    };

    // Run request
    const response = await dataformClient.commitWorkspaceChanges(request);
    console.log(response);
  }

  callCommitWorkspaceChanges();
  // [END dataform_v1alpha2_generated_Dataform_CommitWorkspaceChanges_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

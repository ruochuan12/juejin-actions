import { checkIn, getStatus } from './services/index.js';
import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const [err, res] = await getStatus();
  console.log(err, res.data, 'main');
  if(err){
      throw new Error(err.reponse);
  }
  // 未签到
  if(res.err_no === 0 && !res.data){
      // 签到
      const result = await checkIn();
      console.log(result);
  }
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
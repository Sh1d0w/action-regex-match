import * as core from '@actions/core';

async function run(): Promise<void> {
  try {
    const text = core.getInput('text');
    const regex = core.getInput('regex');
    const flags = core.getInput('flags');

    const re = new RegExp(regex, flags);
    let m;

    const output = [];

    do {
      m = re.exec(text);
      if (m) {
          ouput.push(m[0]);
      }
    } while (m);

    core.setOutput('issues', output.join(','));

  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();

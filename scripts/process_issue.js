const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  const { context } = github;
  const issue = context.payload.issue;
  const issueBody = issue.body || "";

  // Base labels always added
  const labelsToAdd = ["needs_triage", "module"];

  // Check for issue type based on template indicators
  if (issueBody.includes("Bug Report")) {
    labelsToAdd.push("bug");
  } else if (issueBody.includes("Feature Idea") || issueBody.includes("✨ Feature request")) {
    labelsToAdd.push("feature");
  }

  const octokit = github.getOctokit(core.getInput('GITHUB_TOKEN') || process.env.GITHUB_TOKEN);

  // Add labels to the issue
  await octokit.rest.issues.addLabels({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: issue.number,
    labels: labelsToAdd,
  });

  // Extract the COMPONENT NAME from the dedicated section.
  // Expected format in the issue:
  // ##### COMPONENT NAME
  // charts.py
  const componentSectionRegex = /#####\s*COMPONENT NAME\s*\n\s*([a-zA-Z0-9_\-]+\.py)/i;
  let componentName = "COMPONENT_NAME";
  const match = issueBody.match(componentSectionRegex);
  if (match && match[1]) {
    componentName = match[1].trim();
  }

  // If the component name ends with '.py', prepend the desired path.
  let componentPath = componentName;
  if (componentName.endsWith('.py')) {
    componentPath = `nomakcooper/collection/plugins/modules/${componentName}`;
  }

  // Build and post the comment with file link
  const commentBody = `Files identified in the description:\n\n[${componentName}](${componentPath})`;

  await octokit.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: issue.number,
    body: commentBody,
  });
}

run().catch(error => {
  core.setFailed(error.message);
});

Bienvenidos a Yoga Online

Jira Workflow:

Reference issues in your development work

Enjoy the seamless integration of issues and code when your admin has connected Jira Software to Bitbucket Cloud, GitHub, GitLab, or other supported developer tools.

Before you begin

    Your Jira admin needs to either connect Bitbucket Cloud to your Jira site, connect GitHub to your Jira site, or connect another supported development tool. Learn more about integrating with development tools.

    You must have the View development tools project permission in your team’s Jira Software project. Learn more about project permissions.

To reference Jira issues while committing, building, and deploying code with Bitbucket, GitHub, or other supported developer tools:

    Find the issue key for the Jira issue you want to link to, for example “JRA-123”. You can find the key in several places in Jira Software:
    • On the board, issue keys appear at the bottom of a card.
    • On the issue’s details, issue keys appear in the breadcrumb navigation at the top of the page.
    Learn more about issues and issue keys.

    Checkout a new branch in your repo, using the issue key in the branch name. For example, git checkout -b JRA-123-<branch-name>. 

    When committing changes to your branch, use the issue key in your commit message to link those commits to the development panel in your Jira issue. For example, git commit -m "JRA-123 <summary of commit>".

    When you create a pull request, use the issue key in the pull request title.

You need to push something to the connected repository for your tools to recognize and sync with Jira. Sometimes, it may take a few minutes for a complete sync to happen.

After you push your branch, you’ll see development information in your Jira issue.

Not seeing anything? Make sure you’ve formatted the Jira issue key correctly, using capital letters. For example, “JRA-123”, not “jra-123”. 
View development information in Jira

 

To view linked development information in a Jira issue:

    Navigate to the issue.

    Under Development, select the number of pull requests, branches, or commits to see additional information.

To view linked development information on the Jira board:

    Navigate to your board.

    Check for development icons on the issue cards to see whether there are pull requests, branches, commits, or deployments linked to your issues.

    Hover over an icon to view the details of the development activity, and click through to go to your connected development tool.

Development icons will show on your Jira board as long as:

    At least one of the issues on your board has development data linked to it.

    Your board contains less than 100 issues.

Development actions that affect your issues

The following actions in your development environment will link and update your issues in Jira. More actions are available if your Jira admin has enabled smart commits. Learn more about using smart commits.

Branches

Include the issue key in the branch name when you create the branch to link it to your Jira issue.

For example: git checkout -b JRA-123-<branch-name>

This works by default in connected Bitbucket, GitLab, GitHub, GitHub Enterprise, and Fisheye tools.

If you’re using Bitbucket Cloud, GitHub or GitLab, you can create a branch directly from your Jira issue. Under Development, select Create branch. If you create a branch this way, the issue key is automatically added to the name of the branch.

Builds

Build information works by default for connected Bamboo and Bitbucket Pipelines tools.

For Bamboo, a build is automatically linked to an issue if one of the build's commits includes the issue key in its commit message. The issue key must be included in the commit to activate this feature.

For Bitbucket Pipelines, simply include the issue key in the branch name. Learn more about Bitbucket Pipelines.

Commits

Include the issue key in the commit message to link the commit to your Jira issue.

For example: git commit -m "JRA-123 <commit message>"

This works by default in connected Bitbucket, GitLab, GitHub, GitHub Enterprise, and Fisheye tools.

Deployments

A deployment to an environment, such as production or testing, is linked if a commit associated with the deploy contains the issue key in its commit message. The issue key must be included in the commit to activate this feature.

This works by default in connected Bamboo and Bitbucket Pipelines tools.

Pull requests

Do at least one of the following:

    Include a commit in the pull request that has the issue key in the commit message. Note, the commit cannot be a merge commit.

    Include the issue key in the pull request title.

    Ensure that the source branch name also includes the issue key in the branch name.

This works by default in connected Bitbucket, GitLab, GitHub, and GitHub Enterprise tools.

If you create the pull request from the development panel in a Jira issue, the issue key is added automatically.

Reviews

Include the issue key at the beginning of the review title when you create the review to link the review to your Jira issue.

For example, name your review "JRA-123 <review summary>" and start the review.

This works by default if you connect Jira to Crucible.
/**
 * It is recommended to not name it one of the repository configuration filenames listed in the Renovate Docs for Configuration Options.
 *
 * https://github.com/renovatebot/github-action?tab=readme-ov-file#configurationfile
 */

module.exports = {
  /** All branches created by Renovate will be prefixed with this branchPrefix */
  branchPrefix: "renovate/",
  /** This username MUST match the username of the bot account that the PAT was created for. This user is the account Renovate will use when making repository changes */
  username: "dylanclaywell",
  /** The gitAuthor specifies the author that will appear in the commit history */
  gitAuthor: "rasdgit Renovate Bot <rasdgit@iu.edu>",
  /** When running the Renovate action for the first time, this specifies that an onboarding PR be created to show what Renovate will provide initially */
  onboarding: true,
  /** The onboardingBranch specifies the branch that the onboarding PR will be created on */
  onboardingBranch: "renovate/configure",
  /** The platform specifies where Renovate is running */
  platform: "github",
  /** Repositories specifies which repos are watched for dependencies. */
  repositories: ["dylanclaywell/renovate-test"],
  /** Setting dependencyDashboard to true will create a persistent issue that acts as a dashboard to view the current state of the repo since the last time Renovate was run. */
  dependencyDashboard: true,
  /** Setting labels will add the given labels to any pull requests created by Renovate */
  labels: ["renovate"],
  /** packageRules is for specifying specific rules for specific matches (e.g. update types, data sources, package names, etc.) */
  packageRules: [
    {
      /** Typescript does not use semantic versioning, so we pin it with matchPackageNames */
      matchPackageNames: ["typescript"],
      /** rangeStrategy is what specifies what range this rule should apply */
      rangeStrategy: "pin",
    },
    {
      description:
        "Enable automerging patch and minor updates for all dev dependencies",
      /** Here we set what type of dependencies are used for this rule, in this case: devDependencies */
      matchDepTypes: ["devDependencies"],
      /** We specify that only patch and minor update types will be used for this rule */
      matchUpdateTypes: ["patch", "minor"],
      /** We enable automerging */
      automerge: true,
      /** We'll require that a pull request be created for automerged updates. This is partially because of the workflow that runs to run the quality gate and issue management, and also partially to have a more clear audit trail of what Renovate has done. */
      automergeType: "pr",
    },
    {
      description: "Disable major updates for all dependencies",
      /** matchUpdateTypes specifies what types of updates this rule should apply to */
      matchUpdateTypes: ["major"],
      /** We disable this rule; essentially this reads as for any major update types, disable updating. */
      enabled: false,
    },
  ],
}

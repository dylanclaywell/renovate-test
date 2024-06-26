/**
 * It is recommended to not name it one of the repository configuration filenames listed in the Renovate Docs for Configuration Options.
 * 
 * https://github.com/renovatebot/github-action?tab=readme-ov-file#configurationfile
 */

module.exports = {
  branchPrefix: "renovate/",
  // This username MUST match the username of the bot account that the PAT was created for
  username: "dylanclaywell",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: true,
  onboardingBranch: "renovate/configure",
  platform: "github",
  repositories: ["dylanclaywell/renovate-test"],
  dependencyDashboard: true,
  packageRules: [
    {
      description: "lockFileMaintenance",
      matchUpdateTypes: [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance",
      ],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
}

load("@npm//@bazel/typescript:index.bzl", "ts_config", "ts_project")
load("//tools/bzl:js.bzl", "gerrit_js_bundle")
load("//tools/js:eslint.bzl", "plugin_eslint")

package(default_visibility = ["//visibility:public"])

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = ["//plugins:tsconfig-plugins-base.json"],
)

ts_project(
    name = "sap-ai-review-ts",
    srcs = glob(["*.ts"]),
    incremental = True,
    out_dir = "_bazel_ts_out",
    tsconfig = ":tsconfig",
    deps = [
        "//polygerrit-ui/app",
        #"@plugins_npm//@gerritcodereview/typescript-api", cannot use this as aiCodeReview API is not yet available in rpm module.
        "@plugins_npm//lit",
    ],
)

gerrit_js_bundle(
    name = "sap-ai-review",
    srcs = [":sap-ai-review-ts"],
    entry_point = "_bazel_ts_out/plugin.js",
)

plugin_eslint()

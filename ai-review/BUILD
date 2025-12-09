load("//tools/bzl:junit.bzl", "junit_tests")
load(
    "//tools/bzl:plugin.bzl",
    "PLUGIN_DEPS",
    "PLUGIN_TEST_DEPS",
    "gerrit_plugin",
)

gerrit_plugin(
    name = "sap-ai-review",
    srcs = glob([
        "src/main/java/**/*.java",
        "*.ts",
    ]),
    manifest_entries = [
        "Gerrit-PluginName: sap-ai-review",
        "Gerrit-Module: com.sap.gerrit.plugins.aireview.Module",
        "Gerrit-HttpModule: com.sap.gerrit.plugins.aireview.HttpModule",
        "Implementation-Title: sap-ai-review Plugin",
    ],
    resource_jars = ["//plugins/sap-ai-review/web:sap-ai-review"],
    resources = glob(["src/main/resources/**/*"]),
    deps = [
    ],
)

junit_tests(
    name = "sap-ai-review_tests",
    srcs = glob(["src/test/java/**/*.java"]),
    tags = ["sap-ai_review"],
    deps = [
        ":sap-ai-review__plugin_test_deps",
    ],
)

java_library(
    name = "sap-ai-review__plugin_test_deps",
    testonly = 1,
    visibility = ["//visibility:public"],
    exports = PLUGIN_DEPS + PLUGIN_TEST_DEPS + [
        ":sap-ai-review__plugin",
        "@commons-io//jar",
        "@mockito//jar",
    ],
)

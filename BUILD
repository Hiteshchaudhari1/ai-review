load("//tools/bzl:junit.bzl", "junit_tests")
load(
    "//tools/bzl:plugin.bzl",
    "PLUGIN_DEPS",
    "PLUGIN_TEST_DEPS",
    "gerrit_plugin",
)

gerrit_plugin(
    name = "ai-review",
    srcs = glob([
        "src/main/java/**/*.java",
        "*.ts",
    ]),
    manifest_entries = [
        "Gerrit-PluginName: ai-review",
        "Gerrit-HttpModule: com.sap.gerrit.plugins.aireview.HttpModule",
        "Implementation-Title: ai-review Plugin",
    ],
    resource_jars = ["//plugins/ai-review/web:ai-review"],
    resources = glob(["src/main/resources/**/*"]),
    deps = [
    ],
)

junit_tests(
    name = "ai-review_tests",
    srcs = glob(["src/test/java/**/*.java"]),
    tags = ["sap-ai_review"],
    deps = [
        ":ai-review__plugin_test_deps",
    ],
)

java_library(
    name = "ai-review__plugin_test_deps",
    testonly = 1,
    visibility = ["//visibility:public"],
    exports = PLUGIN_DEPS + PLUGIN_TEST_DEPS + [
        ":ai-review__plugin",
        "@commons-io//jar",
        "@mockito//jar",
    ],
)

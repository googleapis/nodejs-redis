import synthtool as s
import synthtool.gcp as gcp
import logging
import subprocess

logging.basicConfig(level=logging.DEBUG)

gapic = gcp.GAPICMicrogenerator()

# tasks has two product names, and a poorly named artman yaml
versions = ['v1beta1', 'v1']

for version in versions:
    library = gapic.typescript_library(
            'redis', 
            generator_args={
                "package-name":f"@google-cloud/redis"
            },
            proto_path=f'/google/cloud/redis/{version}',
            extra_proto_files=["google/cloud/common_resources.proto"],
            version=version,
            )
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.ts'])

common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

# [START fix-dead-link]
s.replace('**/doc/google/protobuf/doc_timestamp.js',
        'https:\/\/cloud\.google\.com[\s\*]*http:\/\/(.*)[\s\*]*\)',
        r"https://\1)")
# [END fix-dead-link]

subprocess.run(['npm', 'install'])
subprocess.run(['npm', 'run', 'fix'])
subprocess.run(['npx', 'compileProtos', 'src'])
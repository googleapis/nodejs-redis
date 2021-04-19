import synthtool as s
import synthtool.languages.node as node
import pathlib


def patch(library: pathlib.Path):
    # fix for broken link in docs
    s.replace(library / 'src/v*/*_client.ts', '/compute/docs/',
            'https://cloud.google.com/compute/docs/')


node.owlbot_main(
    staging_excludes=['package.json', 'README.md'],
    patch_staging=patch
)

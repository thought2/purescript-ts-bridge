build:
    spago build --purs-args '--stash --censor-lib --censor-codes=ImplicitQualifiedImport'

build-strict:
    spago build --purs-args '--stash --censor-lib --strict --censor-codes=ImplicitQualifiedImport'

format:
    purs-tidy format-in-place 'src/**/*.purs'
    purs-tidy format-in-place 'test/**/*.purs'

test:
    spago test

gen-readme:
    node gen-docs/gen-md.js

check-spell:
    yarn run cspell "test/**/*.purs" || true
    yarn run cspell "src/**/*.purs" || true
    yarn run cspell "docs/**/*.md" || true
    yarn run cspell "README.md" || true

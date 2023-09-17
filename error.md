
- Loading PostCSS "postcss-flexbugs-fixes" plugin failed: Cannot find module 'postcss-flexbugs-fixes'


- (@/Users/albert/Developer/LinkedIn Learning/react-interface/react-interface/src/index.css)
ERROR in ./src/index.css (./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[5].use[2]!./node_modules/source-map-loader/dist/cjs.js!./src/index.css)

- Module Error (from ./node_modules/postcss-loader/dist/cjs.js):
Loading PostCSS "postcss-flexbugs-fixes" plugin failed: Cannot find module 'postcss-flexbugs-fixes'

- webpack compiled with 1 error

'Log files:
/Users/albert/.npm/_logs/2023-09-16T23_32_55_432Z-debug-0.log

# npm resolution error report

While resolving: @tailwindcss/forms@0.5.6
Found: tailwindcss@2.2.17
node_modules/tailwindcss
  dev tailwindcss@"npm:@tailwindcss/postcss7-compat@^2.2.17" from the root project

Could not resolve dependency:
peer tailwindcss@">=3.0.0 || >= 3.0.0-alpha.1" from @tailwindcss/forms@0.5.6
node_modules/@tailwindcss/forms
  dev @tailwindcss/forms@"^0.5.6" from the root project

Conflicting peer dependency: tailwindcss@3.3.3
node_modules/tailwindcss
  peer tailwindcss@">=3.0.0 || >= 3.0.0-alpha.1" from @tailwindcss/forms@0.5.6
  node_modules/@tailwindcss/forms
    dev @tailwindcss/forms@"^0.5.6" from the root project

Fix the upstream dependency conflict, or retry
this command with --force or --legacy-peer-deps
to accept an incorrect (and potentially broken) dependency resolution.

# Problems - index.css

[{
	"resource": "/Users/albert/Developer/LinkedIn Learning/react-interface/react-interface/src/index.css",
	"owner": "_generated_diagnostic_collection_name_#3",
	"code": "unknownAtRules",
	"severity": 4,
	"message": "Unknown at rule @tailwind",
	"source": "scss",
	"startLineNumber": 1,
	"startColumn": 1,
	"endLineNumber": 1,
	"endColumn": 10
}]
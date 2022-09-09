## Knack application schema data parser
---
This data parse will accept Knack application schema json objects and remove duplicate data structures.

An object is considered to be a duplicate if an only if the ID matches. If two duplicate data structures have identical data, one is thrown away. If they have different data, an error is thrown.

Data structures which are checked for duplicates are.

* Versions
* Objects (under versions)
* Scenes (under versions)
* Fields (under objects)
* Views (under scenes)


## To run tests:
`npm test`

## To run main:
`npm run main`

Output is printed to the output directory as "clean_application.json".
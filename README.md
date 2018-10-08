# @artdeco/nodetools

[![npm version](https://badge.fury.io/js/@artdeco/nodetools.svg)](https://npmjs.org/package/@artdeco/nodetools)

`@artdeco/nodetools` is A nodetools website.

```sh
yarn add -E @artdeco/nodetools
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`nodetools(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import nodetools from '@artdeco/nodetools'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `nodetools(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

```js
/* yarn example/ */
import nodetools from '@artdeco/nodetools'

(async () => {
  const res = await nodetools({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>
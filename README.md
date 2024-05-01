# Social Share Generator

Generate links to create social share buttons.

- Framework agnostic
- Customizable and extensible
- Simplified interfaces

  ```ts
  import * as Share from 'social-share-generator'

  const facebookLink = Share.facebook({
  	url: 'https://google.com' // <- Not officially supported, equivalent to `u`
  })
  console.log(facebookLink)
  // https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com

  const gmailLink = Share.gmail({
  	subject: 'My Subject' // <- Not officially supported, equivalent to `su`
  })
  console.log(gmailLink)
  // https://mail.google.com/mail?view=cm&su=Subject
  ```

## Installation

```sh
npm i social-share-generator
```

```sh
pnpm i social-share-generator
```

```sh
yarn add social-share-generator
```

## Usage

```ts
import * as Share from 'social-share-generator'

const link = Share.telegram({
	url: 'https://google.com',
	text: 'Hello, world!'
})

const $anchor = document.querySelector<HTMLAnchorElement>('a')!
$anchor.setAttribute('open-win', '') // <- To open in a new window. Required for Reddit.
$anchor.href = link
// https://t.me/share/url?url=https%3A%2F%2Fgoogle.com&text=Hello%2C+world%21
```

## Example

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite + TS</title>
	</head>
	<body>
		<div id="app"></div>
		<script type="module" src="/src/main.ts"></script>
	</body>
</html>
```

```ts
/*src/main.ts*/
import * as Share from 'social-share-generator'
import './style.css'

const shareProps = { url: 'https://imangelo.dev', text: 'Hello, world!' }

const Twitter = Share.twitter({
	...shareProps,
	hashtags: ['hello', 'world'],
	via: 'username'
})
const Facebook = Share.facebook(shareProps)
const Telegram = Share.telegram(shareProps)
const WhatsApp = Share.whatsapp(shareProps)
const Reddit = Share.reddit(shareProps)
const LinkedIn = Share.linkedin(shareProps)
const Tumblr = Share.tumblr({
	...shareProps,
	caption: 'Caption',
	content: 'Content',
	tags: ['tag1', 'tag2'],
	title: 'Title'
})
const Gmail = Share.gmail({
	...shareProps,
	su: 'Subject'
})
const Mailto = Share.mailto(shareProps)
const Pocket = Share.pocket(shareProps)

const socialLinks = {
	Twitter,
	Facebook,
	Telegram,
	WhatsApp,
	Reddit,
	LinkedIn,
	Tumblr,
	Gmail,
	Mailto,
	Pocket
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Object.keys(socialLinks)
		.map(
			(key) =>
				`<a open-new-tab target="_blank" rel="noopener noreferrer" href="${
					socialLinks[key as keyof typeof socialLinks]
				}">${key}</a>`
		)
		.join('\n')}
`
```

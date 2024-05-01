import {
	facebook,
	gmail,
	linkedin,
	mailto,
	pocket,
	reddit,
	telegram,
	tumblr,
	twitter,
	whatsapp
} from '../src'

const shareProps = { url: 'https://imangelo.dev', text: 'Hello, world!' }

test('Get social share link', () => {
	expect(
		twitter({
			...shareProps,
			hashtags: ['hello', 'world'],
			via: 'username'
		})
	).toBe(
		'https://twitter.com/intent/tweet?url=https%3A%2F%2Fimangelo.dev&text=Hello%2C+world%21&hashtags=hello%2Cworld&via=username'
	)

	expect(facebook(shareProps)).toBe(
		'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fimangelo.dev'
	)

	expect(telegram(shareProps)).toBe(
		'https://t.me/share/url?url=https%3A%2F%2Fimangelo.dev&text=Hello%2C+world%21'
	)

	expect(whatsapp(shareProps)).toBe(
		'https://wa.me?text=Hello%2C+world%21+https%3A%2F%2Fimangelo.dev'
	)

	expect(reddit(shareProps)).toBe(
		'https://reddit.com/submit?url=https%3A%2F%2Fimangelo.dev&title=Hello%2C+world%21'
	)

	expect(linkedin(shareProps)).toBe(
		'https://www.linkedin.com/sharing/share-offsite?url=https%3A%2F%2Fimangelo.dev&text=Hello%2C+world%21'
	)

	expect(
		tumblr({
			...shareProps,
			caption: 'Caption',
			content: 'Content',
			tags: ['tag1', 'tag2'],
			title: 'Title'
		})
	).toBe(
		'https://www.tumblr.com/widgets/share/tool?caption=Caption&content=Hello%2C+world%21&tags=tag1%2Ctag2&title=Title&posttype=link&canonicalUrl=https%3A%2F%2Fimangelo.dev'
	)

	expect(
		gmail({
			...shareProps,
			su: 'Subject'
		})
	).toBe(
		'https://mail.google.com/mail?su=Subject&view=cm&body=Hello%2C+world%21+https%3A%2F%2Fimangelo.dev'
	)

	expect(mailto(shareProps)).toBe(
		'mailto:?body=Hello%2C+world%21+https%3A%2F%2Fimangelo.dev'
	)

	expect(pocket(shareProps)).toBe(
		'https://getpocket.com/edit?url=https%3A%2F%2Fimangelo.dev'
	)
})

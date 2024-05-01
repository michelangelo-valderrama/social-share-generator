import type { ShareProps } from './types'
import { socialBase, toQueryString } from './utils'

interface TwitterSharingProps extends ShareProps {
	/**
	 * The `url` parameter contains an absolute HTTP or HTTPS URL to be shared on Twitter.
	 */
	url: string
	/**
	 * A `text` parameter appears pre-selected in a Tweet composer.
	 *
	 * The `text` parameter may be auto-populated from the webpage’s `<title>` element if not explicitly set.
	 */
	text?: string
	/**
	 * List of hashtags to be appended to the Tweet. Omit a preceding “#” from each hashtag; the Tweet composer will automatically add the proper space-separated hashtag by language.
	 *
	 * @example
	 * ```ts
	 * hashtags: ['hello', 'world']
	 * ```
	 */
	hashtags?: string[]
	/**
	 * Attribute the source of a Tweet to a Twitter username. The attribution will appear in a Tweet as "via {@link @}`username`" translated into the language of the Tweet author.
	 *
	 * @example
	 * ```ts
	 * via: 'username'
	 * ```
	 */
	via?: string
}
/**
 * Share on Twitter.
 *
 * [Reference](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)
 */
const twitter = (props: TwitterSharingProps) => socialBase(props, 'twitter')

interface FacebookSharingProps extends ShareProps {
	/**
	 * Not supported by Facebook. Equivalent to `u`.
	 */
	url: string
	/**
	 * URL to share. This attribute has priority over `url`.
	 */
	u?: string
}
/**
 * Share on Facebook.
 *
 * [Reference](https://developers.facebook.com/docs/plugins/share-button/)
 */
const facebook = (props: FacebookSharingProps) => {
	const params = {
		...props,
		u: props.u ?? props.url,
		url: undefined,
		text: undefined
	}
	return socialBase(params, 'facebook')
}

interface TelegramSharingProps extends ShareProps {
	/**
	 * The URL the user will be sharing.
	 */
	url: string
	/**
	 * Optional description that will be included with the link.
	 */
	text?: string
}
/**
 * Share on Telegram.
 *
 * [Reference](https://core.telegram.org/widgets/share#custom-buttons)
 */
const telegram = (props: TelegramSharingProps) => socialBase(props, 'telegram')

interface WhatsappSharingProps extends ShareProps {
	/**
	 * Not supported by WhatsApp. See `text`.
	 */
	url: string
	/**
	 * Pre-filled text for the message. Added to `url`.
	 *
	 * @example
	 * ```ts
	 * url: 'https://google.com'
	 * text: 'Hello, world!'
	 * // 'Hello, world! https://google.com'
	 * ```
	 */
	text?: string
}
/**
 * Share on WhatsApp.
 *
 * [Reference](https://faq.whatsapp.com/5913398998672934/?locale=en_US)
 */
const whatsapp = (props: WhatsappSharingProps) => {
	const params = {
		...props,
		text: props.text ? `${props.text} ${props.url}` : props.url
	}
	return socialBase(params, 'whatsapp')
}

interface RedditSharingProps extends ShareProps {
	/**
	 * Not supported by Reddit. Equivalent to `title`.
	 */
	text?: string
	/**
	 * Post title. This attribute has priority over `text`.
	 */
	title?: string
}
/**
 * Share on Reddit.
 *
 * [Reference](https://github.com/bradvin/social-share-urls?tab=readme-ov-file#-reddit)
 */
const reddit = (props: RedditSharingProps) => {
	const params = {
		...props,
		title: props.title ?? props.text
	}
	return socialBase(params, 'reddit')
}

interface LinkedInSharingProps extends ShareProps {
	/**
	 * This attribute is not **officially** supported by LinkedIn, but it works.
	 */
	text?: string
}
/**
 * Share on LinkedIn.
 *
 * [Reference](https://stackoverflow.com/questions/33426752/linkedin-share-post-url)
 */
const linkedin = (props: LinkedInSharingProps) => {
	const params = {
		...props
	}
	return socialBase(params, 'linkedin')
}

interface TumblrSharingProps extends ShareProps {
	/**
	 * Not supported by Tumblr. Equivalent to `canonicalUrl`.
	 */
	url: string
	/**
	 * Not supported by Tumblr. Equivalent to `caption`.
	 */
	text?: string
	/**
	 * Canonical URL of the page. This attribute has priority over `url`.
	 */
	canonicalUrl?: string
	/**
	 * The main content of the post.
	 *
	 * In practice it doesn't work.
	 */
	content?: string
	/**
	 * The title of the post.
	 *
	 * In practice it doesn't work.
	 */
	title?: string
	/**
	 * A description of the link.
	 *
	 * In practice it doesn't work.
	 */
	caption?: string
	/**
	 * A list of tags to apply to the post.
	 *
	 * In practice it doesn't work.
	 */
	tags?: string[]
}
/**
 * Share on Tumblr.
 *
 * [Reference](https://www.tumblr.com/docs/en/share_button)
 */
const tumblr = (props: TumblrSharingProps) => {
	const params = {
		...props,
		posttype: 'link',
		canonicalUrl: props.canonicalUrl ?? props.url,
		content: props.text ?? props.caption
	}
	return socialBase(params, 'tumblr')
}

interface GmailSharingProps extends ShareProps {
	/**
	 * Not supported by Gmail. See `body`.
	 */
	url: string
	/**
	 * The subject of the email. Equivalent to `body`.
	 */
	text?: string
	/**
	 * The body of the email.
	 *
	 * This attribute has priority over `text`.
	 *
	 * Added to `url`.
	 *
	 * @example
	 * ```ts
	 * url: 'https://google.com'
	 * body: 'Hello, world!'
	 * // 'Hello, world! https://google.com'
	 * ```
	 */
	body?: string
	/**
	 * The email address of the recipient.
	 */
	to?: string
	/**
	 * Not supported by Gmail. Equivalent to `su`.
	 */
	subject?: string
	/**
	 * The subject of the email. This attribute has priority over `subject`.
	 */
	su?: string
	/**
	 * Email Blind-Carbon Copy.
	 */
	bcc?: string
	/**
	 * Email Carbon Copy address
	 */
	cc?: string
}
/**
 * Share on Gmail.
 *
 * [Reference](https://stackoverflow.com/questions/20956206/is-the-mail-google-com-api-documented/56782038#56782038).
 */
const gmail = (props: GmailSharingProps) => {
	const params = {
		...props,
		view: 'cm',
		body: `${props.body ?? props.text} ${props.url}`,
		su: props.su ?? props.subject,
		url: undefined,
		text: undefined
	}
	return socialBase(params, 'gmail')
}

interface MailtoSharingProps extends ShareProps {
	/**
	 * Not supported by Mailto. See `body`.
	 */
	url: string
	/**
	 * The email address of the recipient.
	 */
	emailAddress?: string
	/**
	 * Not supported by Mailto. Equivalent to `body`.
	 */
	text?: string
	/**
	 * The subject of the email.
	 */
	subject?: string
	/**
	 * The body of the email.
	 *
	 * This attribute has priority over `text`.
	 *
	 * Added to `url`.
	 *
	 * @example
	 * ```ts
	 * url: 'https://google.com'
	 * body: 'Hello, world!'
	 * // 'Hello, world! https://google.com'
	 * ```
	 */
	body?: string
}
/**
 * Share by email.
 *
 * [Reference](https://www.ietf.org/rfc/rfc2368.txt).
 */
const mailto = (props: MailtoSharingProps) => {
	const params = {
		...props,
		body: `${props.body ?? props.text} ${props.url}`,
		emailAddress: undefined
	}
	return `mailto:{${props.emailAddress}}?${toQueryString(params)}`
}

interface PocketSharingProps extends ShareProps {
	/**
	 * URL to save.
	 */
	url: string
	/**
	 * Not supported by Pocket.
	 * @deprecated
	 */
	text?: string
}
/**
 * Save on Pocket.
 *
 * [Reference](https://getpocket.com/publisher/button_docs)
 */
const pocket = (props: PocketSharingProps) => socialBase(props, 'pocket')

export {
	twitter,
	facebook,
	telegram,
	whatsapp,
	reddit,
	linkedin,
	tumblr,
	gmail,
	mailto,
	pocket
}

const init = () => {
	let windowObjectReference: Window | null = null
	function openRequestedTab(url: string, windowName: string) {
		if (windowObjectReference === null || windowObjectReference.closed) {
			windowObjectReference = window.open(
				url,
				windowName,
				'popup,width=600,height=600'
			)
		} else {
			windowObjectReference.focus()
		}
	}
	const links = document.querySelectorAll<HTMLLinkElement>('a[open-win]')
	for (let link of links) {
		link.removeAttribute('target')
		link.addEventListener(
			'click',
			(e) => {
				openRequestedTab(link.href, '_blank')
				e.preventDefault()
			},
			false
		)
	}
}

if (typeof window !== 'undefined') {
	document.addEventListener('DOMContentLoaded', init)
}

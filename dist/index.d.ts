interface ShareProps {
	/**
	 * URL to share.
	 *
	 * @example
	 * ```ts
	 * url: 'https://google.com'
	 * ```
	 */
	url: string
	/**
	 * Text to share.
	 *
	 * @example
	 * ```ts
	 * text: 'Hello, world!'
	 * ```
	 */
	text?: string
	[key: unknown]: unknown
}

interface TwitterSharingProps extends ShareProps {
    /**
     * The `url` parameter contains an absolute HTTP or HTTPS URL to be shared on Twitter.
     */
    url: string;
    /**
     * A `text` parameter appears pre-selected in a Tweet composer.
     *
     * The `text` parameter may be auto-populated from the webpage’s `<title>` element if not explicitly set.
     */
    text?: string;
    /**
     * List of hashtags to be appended to the Tweet. Omit a preceding “#” from each hashtag; the Tweet composer will automatically add the proper space-separated hashtag by language.
     *
     * @example
     * ```ts
     * hashtags: ['hello', 'world']
     * ```
     */
    hashtags?: string[];
    /**
     * Attribute the source of a Tweet to a Twitter username. The attribution will appear in a Tweet as "via {@link @}`username`" translated into the language of the Tweet author.
     *
     * @example
     * ```ts
     * via: 'username'
     * ```
     */
    via?: string;
}
/**
 * Share on Twitter.
 *
 * [Reference](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)
 */
declare const twitter: (props: TwitterSharingProps) => string;
interface FacebookSharingProps extends ShareProps {
    /**
     * Not supported by Facebook. Equivalent to `u`.
     */
    url: string;
    /**
     * URL to share. This attribute has priority over `url`.
     */
    u?: string;
}
/**
 * Share on Facebook.
 *
 * [Reference](https://developers.facebook.com/docs/plugins/share-button/)
 */
declare const facebook: (props: FacebookSharingProps) => string;
interface TelegramSharingProps extends ShareProps {
    /**
     * The URL the user will be sharing.
     */
    url: string;
    /**
     * Optional description that will be included with the link.
     */
    text?: string;
}
/**
 * Share on Telegram.
 *
 * [Reference](https://core.telegram.org/widgets/share#custom-buttons)
 */
declare const telegram: (props: TelegramSharingProps) => string;
interface WhatsappSharingProps extends ShareProps {
    /**
     * Not supported by WhatsApp. See `text`.
     */
    url: string;
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
    text?: string;
}
/**
 * Share on WhatsApp.
 *
 * [Reference](https://faq.whatsapp.com/5913398998672934/?locale=en_US)
 */
declare const whatsapp: (props: WhatsappSharingProps) => string;
interface RedditSharingProps extends ShareProps {
    /**
     * Not supported by Reddit. Equivalent to `title`.
     */
    text?: string;
    /**
     * Post title. This attribute has priority over `text`.
     */
    title?: string;
}
/**
 * Share on Reddit.
 *
 * [Reference](https://github.com/bradvin/social-share-urls?tab=readme-ov-file#-reddit)
 */
declare const reddit: (props: RedditSharingProps) => string;
interface LinkedInSharingProps extends ShareProps {
    /**
     * This attribute is not **officially** supported by LinkedIn, but it works.
     */
    text?: string;
}
/**
 * Share on LinkedIn.
 *
 * [Reference](https://stackoverflow.com/questions/33426752/linkedin-share-post-url)
 */
declare const linkedin: (props: LinkedInSharingProps) => string;
interface TumblrSharingProps extends ShareProps {
    /**
     * Not supported by Tumblr. Equivalent to `canonicalUrl`.
     */
    url: string;
    /**
     * Not supported by Tumblr. Equivalent to `caption`.
     */
    text?: string;
    /**
     * Canonical URL of the page. This attribute has priority over `url`.
     */
    canonicalUrl?: string;
    /**
     * The main content of the post.
     *
     * In practice it doesn't work.
     */
    content?: string;
    /**
     * The title of the post.
     *
     * In practice it doesn't work.
     */
    title?: string;
    /**
     * A description of the link.
     *
     * In practice it doesn't work.
     */
    caption?: string;
    /**
     * A list of tags to apply to the post.
     *
     * In practice it doesn't work.
     */
    tags?: string[];
}
/**
 * Share on Tumblr.
 *
 * [Reference](https://www.tumblr.com/docs/en/share_button)
 */
declare const tumblr: (props: TumblrSharingProps) => string;
interface GmailSharingProps extends ShareProps {
    /**
     * Not supported by Gmail. See `body`.
     */
    url: string;
    /**
     * The subject of the email. Equivalent to `body`.
     */
    text?: string;
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
    body?: string;
    /**
     * The email address of the recipient.
     */
    to?: string;
    /**
     * Not supported by Gmail. Equivalent to `su`.
     */
    subject?: string;
    /**
     * The subject of the email. This attribute has priority over `subject`.
     */
    su?: string;
    /**
     * Email Blind-Carbon Copy.
     */
    bcc?: string;
    /**
     * Email Carbon Copy address
     */
    cc?: string;
}
/**
 * Share on Gmail.
 *
 * [Reference](https://stackoverflow.com/questions/20956206/is-the-mail-google-com-api-documented/56782038#56782038).
 */
declare const gmail: (props: GmailSharingProps) => string;
interface MailtoSharingProps extends ShareProps {
    /**
     * Not supported by Mailto. See `body`.
     */
    url: string;
    /**
     * The email address of the recipient.
     */
    emailAddress?: string;
    /**
     * Not supported by Mailto. Equivalent to `body`.
     */
    text?: string;
    /**
     * The subject of the email.
     */
    subject?: string;
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
    body?: string;
}
/**
 * Share by email.
 *
 * [Reference](https://www.ietf.org/rfc/rfc2368.txt).
 */
declare const mailto: (props: MailtoSharingProps) => string;
interface PocketSharingProps extends ShareProps {
    /**
     * URL to save.
     */
    url: string;
    /**
     * Not supported by Pocket.
     * @deprecated
     */
    text?: string;
}
/**
 * Save on Pocket.
 *
 * [Reference](https://getpocket.com/publisher/button_docs)
 */
declare const pocket: (props: PocketSharingProps) => string;

export { facebook, gmail, linkedin, mailto, pocket, reddit, telegram, tumblr, twitter, whatsapp };

export interface ShareProps {
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

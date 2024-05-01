import { SOCIAL_URLS } from './constants'

export const toQueryString = (params: Record<string, any>) => {
	const query = new URLSearchParams()
	for (const [key, value] of Object.entries(params)) {
		if (value) query.set(key, `${value}`)
	}
	return query.toString()
}

export const socialBase = <T extends Object>(
	queryParams: T,
	socialBaseUrl: keyof typeof SOCIAL_URLS
) => {
	const params = toQueryString({ ...queryParams })
	return `${SOCIAL_URLS[socialBaseUrl]}?${params.toString()}`
}

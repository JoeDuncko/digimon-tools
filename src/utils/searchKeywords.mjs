const normalize = value =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();

const searchableText = keyword =>
    normalize([keyword.name, keyword.definition, ...(keyword.aliases ?? [])].join(' '));

export const searchKeywords = (keywords, query) => {
    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
        return keywords;
    }

    const tokens = normalizedQuery.split(/\s+/);

    return keywords.filter(keyword => {
        const haystack = searchableText(keyword);
        return tokens.every(token => haystack.includes(token));
    });
};

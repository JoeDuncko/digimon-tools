import { keywordLookupEntries, keywordMetadata } from '../data/digimonKeywords.mjs';

const formatDate = (date: string) => date;

export const GET = () => {
    const body = [
        `# ${keywordMetadata.title}`,
        '',
        `Source: [${keywordMetadata.sourceName}](${keywordMetadata.sourceUrl})`,
        `Source section: ${keywordMetadata.sourceSection}`,
        `Rule Q&A source: [${keywordMetadata.ruleQaSourceName}](${keywordMetadata.ruleQaSourceUrl})`,
        `Rule Q&A section: ${keywordMetadata.ruleQaSourceSection}`,
        `Source date: ${formatDate(keywordMetadata.sourcePublished)}`,
        `Rule Q&A updated: ${formatDate(keywordMetadata.ruleQaLastUpdated)}`,
        `Last checked: ${formatDate(keywordMetadata.lastChecked)}`,
        '',
        'These are Digimon.Tools summaries, not official card text or official rules text. Use the linked source for authoritative wording.',
        '',
        ...keywordLookupEntries.flatMap(keyword => [
            `## ${keyword.name}`,
            '',
            `Category: ${keyword.category}`,
            '',
            keyword.definition,
            '',
            ...(keyword.aliases?.length ? [`Aliases: ${keyword.aliases.join(', ')}`, ''] : []),
        ]),
    ].join('\n');

    return new Response(body, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
        },
    });
};

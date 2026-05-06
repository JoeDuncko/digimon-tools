import { keywordMetadata, keywords } from '../data/digimonKeywords.mjs';

const formatDate = (date: string) => date;

export const GET = () => {
    const body = [
        `# ${keywordMetadata.title}`,
        '',
        `Source: [${keywordMetadata.sourceName}](${keywordMetadata.sourceUrl})`,
        `Source section: ${keywordMetadata.sourceSection}`,
        `Source date: ${formatDate(keywordMetadata.sourcePublished)}`,
        `Last checked: ${formatDate(keywordMetadata.lastChecked)}`,
        '',
        'These are Digimon.Tools summaries, not official card text or official rules text. Use the linked source for authoritative wording.',
        '',
        ...keywords.flatMap(keyword => [
            `## ${keyword.name}`,
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

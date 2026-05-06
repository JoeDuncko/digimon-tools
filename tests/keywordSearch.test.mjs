import test from 'node:test';
import assert from 'node:assert/strict';

import { keywordMetadata, keywords } from '../src/data/digimonKeywords.mjs';
import { searchKeywords } from '../src/utils/searchKeywords.mjs';

test('keyword data includes official source metadata', () => {
    assert.equal(keywordMetadata.sourceName, 'Official Rule Manual Ver.5.0');
    assert.match(
        keywordMetadata.sourceUrl,
        /^https:\/\/world\.digimoncard\.com\/rule\/pdf\/manual\.pdf/
    );
    assert.equal(keywordMetadata.sourcePublished, '2026-04-01');
    assert.equal(keywordMetadata.sourceSection, 'Keyword Effects, pp. 46-47');
    assert.match(keywordMetadata.lastChecked, /^\d{4}-\d{2}-\d{2}$/);
});

test('keyword data is in alphabetical order', () => {
    assert.deepEqual(
        keywords.map(keyword => keyword.name),
        [...keywords.map(keyword => keyword.name)].sort((a, b) => a.localeCompare(b))
    );
});

test('keyword search matches names, aliases, and definitions', () => {
    assert.equal(searchKeywords(keywords, 'armor').at(0)?.name, 'Armor Purge');
    assert.equal(
        searchKeywords(keywords, 'security attack').some(keyword =>
            keyword.name.startsWith('Security A.')
        ),
        true
    );
    assert.equal(searchKeywords(keywords, 'partition').at(0)?.name, 'Partition《XX & XX》');
    assert.equal(searchKeywords(keywords, 'highest DP').at(0)?.name, 'Raid');
    assert.equal(
        searchKeywords(keywords, 'blocker').some(keyword => keyword.name === 'Collision'),
        true
    );
});

test('blank searches return every keyword in display order', () => {
    assert.deepEqual(
        searchKeywords(keywords, '').map(keyword => keyword.name),
        keywords.map(keyword => keyword.name)
    );
});

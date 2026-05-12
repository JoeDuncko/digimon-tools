import test from 'node:test';
import assert from 'node:assert/strict';

import {
    keywordLookupEntries,
    keywordMetadata,
    keywords,
    ruleMechanics,
} from '../src/data/digimonKeywords.mjs';
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

test('keyword effect data includes the current official keyword effect list', () => {
    assert.equal(keywords.some(keyword => keyword.name === 'Training'), true);
});

test('rules mechanics are kept separate from keyword effects', () => {
    assert.equal(ruleMechanics.some(term => term.name === 'DigiXros'), true);
    assert.equal(ruleMechanics.some(term => term.name === 'Assembly'), true);
    assert.equal(keywords.some(keyword => keyword.name === 'DigiXros'), false);
    assert.equal(keywords.some(keyword => keyword.name === 'Assembly'), false);
});

test('keyword search matches names, aliases, and definitions', () => {
    assert.equal(searchKeywords(keywordLookupEntries, 'armor').at(0)?.name, 'Armor Purge');
    assert.equal(
        searchKeywords(keywordLookupEntries, 'security attack').some(keyword =>
            keyword.name.startsWith('Security A.')
        ),
        true
    );
    assert.equal(
        searchKeywords(keywordLookupEntries, 'partition').at(0)?.name,
        'Partition《XX & XX》'
    );
    assert.equal(searchKeywords(keywordLookupEntries, 'highest DP').at(0)?.name, 'Raid');
    assert.equal(
        searchKeywords(keywordLookupEntries, 'blocker').some(keyword => keyword.name === 'Collision'),
        true
    );
    assert.equal(searchKeywords(keywordLookupEntries, 'xros').at(0)?.name, 'DigiXros');
    assert.equal(searchKeywords(keywordLookupEntries, 'trash reduce cost').at(0)?.name, 'Assembly');
});

test('blank searches return every keyword in display order', () => {
    assert.deepEqual(
        searchKeywords(keywordLookupEntries, '').map(keyword => keyword.name),
        keywordLookupEntries.map(keyword => keyword.name)
    );
});

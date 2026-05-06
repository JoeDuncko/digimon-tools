export const keywordMetadata = {
    title: 'Digimon Card Game Keyword Effects',
    sourceName: 'Official Rule Manual Ver.5.0',
    sourceUrl: 'https://world.digimoncard.com/rule/pdf/manual.pdf?20260401=',
    sourcePublished: '2026-04-01',
    lastChecked: '2026-05-06',
    sourcePageUrl: 'https://world.digimoncard.com/rule/',
    sourceSection: 'Keyword Effects, pp. 46-47',
};

export const keywords = [
    {
        name: 'Alliance',
        definition:
            "When this Digimon attacks, by suspending 1 of your other Digimon, this Digimon gains <Security A. +1> and the suspended Digimon's DP for the attack.",
        aliases: [],
    },
    {
        name: 'Armor Purge',
        definition:
            "When this Digimon would be deleted, by trashing this Digimon's top stacked card, it isn't deleted.",
        aliases: [],
    },
    {
        name: 'Ascension',
        definition:
            'When this Digimon is deleted, you may place this card as the top security card.',
        aliases: [],
    },
    {
        name: 'Barrier',
        definition:
            "When this Digimon would be deleted in battle, by trashing your top security card, it isn't deleted.",
        aliases: [],
    },
    {
        name: 'Blast Digivolve',
        definition: 'Your Digimon may digivolve into this card without paying the cost.',
        aliases: [],
    },
    {
        name: 'Blast DNA Digivolve《[XX]+[XX]》',
        definition:
            '1 of your specified Digimon and 1 specified card in the hand may DNA digivolve into this card.',
        aliases: ['Blast DNA Digivolve'],
    },
    {
        name: 'Blitz',
        definition: 'If your opponent has 1 or more memory, this Digimon may attack.',
        aliases: [],
    },
    {
        name: 'Blocker',
        definition: 'This Digimon can block in the blocker timing.',
        aliases: ['block'],
    },
    {
        name: 'Collision',
        definition:
            "During this Digimon's attack, give all of your opponent's Digimon <Blocker>, and the opponent blocks if able.",
        aliases: [],
    },
    {
        name: 'De-Digivolve X',
        definition: "Trash the/up to X top stacked card(s). You can't trash past level 3 cards.",
        aliases: ['De-Digivolve', 'dedigivolve'],
    },
    {
        name: 'Decode《XX》',
        definition:
            'When this Digimon would leave the battle area other than in battle, you may play 1 specified Digimon card from its digivolution cards without paying the cost.',
        aliases: ['Decode'],
    },
    {
        name: 'Decoy《XX》',
        definition:
            "When your opponent's effects would delete any of your other specified Digimon, by deleting this Digimon, 1 of those Digimon isn't deleted.",
        aliases: ['Decoy'],
    },
    {
        name: 'Delay',
        definition: 'By trashing this card after the placing turn, activate the effect.',
        aliases: [],
    },
    {
        name: 'Digi-Burst X',
        definition:
            "By trashing any X of this Digimon's digivolution cards, activate the effect below.",
        aliases: ['Digi-Burst'],
    },
    {
        name: 'Digisorption -X',
        definition:
            'When this card in your hand would be digivolved into, by suspending 1 of your Digimon, reduce the cost by X.',
        aliases: ['Digisorption'],
    },
    {
        name: 'Draw X',
        definition: 'Draw X card(s) from your deck.',
        aliases: ['Draw'],
    },
    {
        name: 'Evade',
        definition: "When this Digimon would be deleted, by suspending it, it isn't deleted.",
        aliases: [],
    },
    {
        name: 'Execute',
        definition:
            "At the end of your turn, this Digimon may attack. At the end of that attack, delete this Digimon. Your opponent's unsuspended Digimon can also be attacked with this effect.",
        aliases: [],
    },
    {
        name: 'Fortitude',
        definition:
            'When this Digimon with digivolution cards is deleted, play this card without paying the cost.',
        aliases: [],
    },
    {
        name: 'Fragment《X》',
        definition:
            "When this Digimon would be deleted, by trashing any X of its digivolution cards, it isn't deleted.",
        aliases: ['Fragment'],
    },
    {
        name: 'Iceclad',
        definition:
            "Other than against Security Digimon, compare the number of digivolution cards instead of DP in this Digimon's battles.",
        aliases: [],
    },
    {
        name: 'Jamming',
        definition: "This Digimon can't be deleted in battles against Security Digimon.",
        aliases: [],
    },
    {
        name: 'Link +X',
        definition: "Add X to this Digimon's maximum links.",
        aliases: ['Link +'],
    },
    {
        name: 'Material Save X',
        definition:
            "When this Digimon would be deleted, you may place X card(s) in this Digimon's DigiXros requirements from this Digimon's digivolution cards under 1 of your Tamers.",
        aliases: ['Material Save'],
    },
    {
        name: 'Mind Link',
        definition:
            "Place this Tamer as any Digimon's bottom digivolution card if there are no Tamer cards in its digivolution cards.",
        aliases: [],
    },
    {
        name: 'Overclock ([XX] trait)',
        definition:
            'At the end of your turn, by deleting 1 of your Tokens or other specified Digimon, this Digimon attacks a player without suspending.',
        aliases: ['Overclock'],
    },
    {
        name: 'Partition《XX & XX》',
        definition:
            'When this Digimon with each of the specified digivolution cards would leave the battle area other than by your effects or a battle, you may play 1 each of the specified cards without paying the costs.',
        aliases: ['Partition'],
    },
    {
        name: 'Piercing',
        definition:
            "When this Digimon deletes your opponent's Digimon in battle while attacking, it checks security before the attack ends.",
        aliases: [],
    },
    {
        name: 'Progress',
        definition: "While attacking, your opponent's effects don't affect this Digimon.",
        aliases: [],
    },
    {
        name: 'Raid',
        definition:
            "When this Digimon attacks, you may change the attack target to 1 of your opponent's unsuspended Digimon with the highest DP.",
        aliases: [],
    },
    {
        name: 'Reboot',
        definition: "This Digimon also unsuspends in your opponent's unsuspend phase.",
        aliases: [],
    },
    {
        name: 'Recovery +X',
        definition: 'Place the top (X) card(s) of your deck as your top security card(s).',
        aliases: ['Recovery'],
    },
    {
        name: 'Retaliation',
        definition: 'When only this Digimon is deleted in battle, delete the Digimon it battled.',
        aliases: [],
    },
    {
        name: 'Rush',
        definition: 'This Digimon can attack the turn it was played.',
        aliases: [],
    },
    {
        name: 'Save',
        definition: 'You may place this card under any of your Tamers.',
        aliases: [],
    },
    {
        name: 'Scapegoat',
        definition:
            "When this Digimon would be deleted other than by your effects, by deleting 1 of your other Digimon, it isn't deleted.",
        aliases: [],
    },
    {
        name: 'Security A. / Security A. +X / Security A. -X',
        definition:
            'This Digimon checks X additional security card(s). This Digimon checks X fewer security card(s).',
        aliases: ['Security A.', 'Security Attack', 'Security Attack +X', 'Security Attack -X'],
    },
    {
        name: 'Use Req.《XX》',
        definition: 'Specified cards let you ignore color requirements.',
        aliases: ['Use Req.', 'Use Requirements'],
    },
    {
        name: 'Vortex',
        definition:
            "At the end of your turn, this Digimon may attack an opponent's Digimon. With this effect, it can attack the turn it was played.",
        aliases: [],
    },
];

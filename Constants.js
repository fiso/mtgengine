var Constants = {
	steps: {
		UNTAP: 0,
		UPKEEP: 1,
		DRAW: 2,
		MAIN1: 3,
		BEGIN_COMBAT: 4,
		DECLARE_ATTACKERS: 5,
		DECLARE_BLOCKERS: 6,
		FIRST_COMBAT_DAMAGE: 7,
		COMBAT_DAMAGE: 8,
		END_COMBAT: 9,
		MAIN2: 10,
		END: 11,
		CLEANUP: 12
	},

	stepNames: {
		0: "UNTAP",
		1: "UPKEEP",
		2: "DRAW",
		3: "MAIN1",
		4: "BEGIN_COMBAT",
		5: "DECLARE_ATTACKERS",
		6: "DECLARE_BLOCKERS",
		7: "FIRST_COMBAT_DAMAGE",
		8: "COMBAT_DAMAGE",
		9: "END_COMBAT",
		10: "MAIN2",
		11: "END",
		12: "CLEANUP"
	},

	tapStates: {
		UNTAPPED: "UNTAPPED",
		TAPPED: "TAPPED"
	},

	flipStates: {
		NORMAL: "NORMAL",
		FLIPPED: "FLIPPED"
	},

	transformState: {
		NORMAL: "NORMAL",
		TRANSFORMED: "TRANSFORMED"
	},

	faceState: {
		FACEUP: "FACEUP",
		FACEDOWN: "FACEDOWN"
	},

	zoneTypes: {
		PUBLIC: "PUBLIC",
		HIDDEN: "HIDDEN"
	},

	zoneOwnership: {
		PLAYER: "PLAYER",
		SHARED: "SHARED"
	},

	cardSuperTypes: {
		LEGENDARY: "LEGENDARY",
		BASIC: "BASIC",
		WORLD: "WORLD",
		SNOW: "SNOW",
		ONGOING: "ONGOING"
	},

	cardTypes: {
		ARTIFACT: "ARTIFACT",
		CREATURE: "CREATURE",
		ENCHANTMENT: "ENCHANTMENT",
		INSTANT: "INSTANT",
		LAND: "LAND",
		PHENOMENON: "PHENOMENON",
		PLANE: "PLANE",
		PLANESWALKER: "PLANESWALKER",
		SCHEME: "SCHEME",
		SORCERY: "SORCERY",
		TRIBAL: "TRIBAL",
		VANGUARD: "VANGUARD"
	},

	colors: {
		WHITE: "WHITE",
		BLUE: "BLUE",
		BLACK: "BLACK",
		RED: "RED",
		GREEN: "GREEN"
	},

	manaTypes: {
		WHITE: "WHITE",
		BLUE: "BLUE",
		BLACK: "BLACK",
		RED: "RED",
		GREEN: "GREEN",
		COLORLESS: "COLORLESS"
	},

	costs: {
		WHITE: "WHITE",
		BLUE: "BLUE",
		BLACK: "BLACK",
		RED: "RED",
		GREEN: "GREEN",
		COLORLESS: "COLORLESS",
		GENERIC: "GENERIC",
		X: "X",
		TAP: "TAP",
		UNTAP: "UNTAP"
	}
};

module.exports = Constants;

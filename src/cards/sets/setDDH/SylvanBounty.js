"use strict";
const Constants = require ("../../../Constants");
const SylvanBountyBase = require("../setCON/SylvanBounty");

class SylvanBounty extends SylvanBountyBase {
  constructor (game) {
    super(game, "Sylvan Bounty", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SylvanBounty;

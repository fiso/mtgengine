"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanBountyBase = require("../setCON/SylvanBounty.js");

class SylvanBounty extends SylvanBountyBase {
  constructor(game) {
    super(game, "Sylvan Bounty", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SylvanBounty;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BehemothSledgeBase = require("../setARB/BehemothSledge.js");

class BehemothSledge extends BehemothSledgeBase {
  constructor(game) {
    super(game, "Behemoth Sledge", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = BehemothSledge;

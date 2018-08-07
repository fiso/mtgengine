"use strict";
const Constants = require ("../../../Constants");
const LeadtheStampedeBase = require("../setDDU/LeadtheStampede");

class LeadtheStampede extends LeadtheStampedeBase {
  constructor (game) {
    super(game, "Lead the Stampede", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = LeadtheStampede;

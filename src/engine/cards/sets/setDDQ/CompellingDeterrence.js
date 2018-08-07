"use strict";
const Constants = require ("../../../Constants");
const CompellingDeterrenceBase = require("../setSOI/CompellingDeterrence");

class CompellingDeterrence extends CompellingDeterrenceBase {
  constructor (game) {
    super(game, "Compelling Deterrence", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CompellingDeterrence;

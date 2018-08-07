"use strict";
const Constants = require ("../../../Constants");
const AngerBase = require("../setCMA/Anger");

class Anger extends AngerBase {
  constructor (game) {
    super(game, "Anger", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Anger;

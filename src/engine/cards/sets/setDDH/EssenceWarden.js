"use strict";
const Constants = require ("../../../Constants");
const EssenceWardenBase = require("../setCMA/EssenceWarden");

class EssenceWarden extends EssenceWardenBase {
  constructor (game) {
    super(game, "Essence Warden", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = EssenceWarden;

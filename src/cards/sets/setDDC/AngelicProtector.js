"use strict";
const Constants = require ("../../../Constants");
const AngelicProtectorBase = require("../setTPR/AngelicProtector");

class AngelicProtector extends AngelicProtectorBase {
  constructor (game) {
    super(game, "Angelic Protector", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AngelicProtector;

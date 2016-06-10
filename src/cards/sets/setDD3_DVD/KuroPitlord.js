"use strict";
const Constants = require ("../../../Constants");
const KuroPitlordBase = require("../setCHK/KuroPitlord");

class KuroPitlord extends KuroPitlordBase {
  constructor (game) {
    super(game, "Kuro, Pitlord", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = KuroPitlord;

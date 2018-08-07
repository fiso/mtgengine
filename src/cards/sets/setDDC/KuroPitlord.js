"use strict";
const Constants = require ("../../../Constants");
const KuroPitlordBase = require("../setDVD/KuroPitlord");

class KuroPitlord extends KuroPitlordBase {
  constructor (game) {
    super(game, "Kuro, Pitlord", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = KuroPitlord;

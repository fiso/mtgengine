"use strict";
const Constants = require ("../../../Constants");
const CruelEdictBase = require("../setDVD/CruelEdict");

class CruelEdict extends CruelEdictBase {
  constructor (game) {
    super(game, "Cruel Edict", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = CruelEdict;

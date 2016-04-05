"use strict";
const Constants = require ("../../../Constants");
const MasterDecoyBase = require("../setBRB/MasterDecoy");

class MasterDecoy extends MasterDecoyBase {
  constructor(game) {
    super(game, "Master Decoy", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = MasterDecoy;

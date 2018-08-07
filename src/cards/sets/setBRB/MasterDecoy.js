"use strict";
const Constants = require ("../../../Constants");
const MasterDecoyBase = require("../setTPR/MasterDecoy");

class MasterDecoy extends MasterDecoyBase {
  constructor (game) {
    super(game, "Master Decoy", "Battle Royale Box Set", "BRB");
  }
}

module.exports = MasterDecoy;

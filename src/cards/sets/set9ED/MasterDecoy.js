"use strict";
const Constants = require ("../../../Constants");
const MasterDecoyBase = require("../setTPR/MasterDecoy");

class MasterDecoy extends MasterDecoyBase {
  constructor (game) {
    super(game, "Master Decoy", "Ninth Edition", "9ED");
  }
}

module.exports = MasterDecoy;

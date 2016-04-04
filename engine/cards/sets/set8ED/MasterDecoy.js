"use strict";
const Constants = require ("../../../Constants");
const MasterDecoyBase = require("../setBRB/MasterDecoy");

class MasterDecoy extends MasterDecoyBase {
  constructor(game) {
    super(game, "Master Decoy", "Eighth Edition", "8ED");
  }
}

module.exports = MasterDecoy;

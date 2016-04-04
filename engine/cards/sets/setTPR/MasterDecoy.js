"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasterDecoyBase = require("../setBRB/MasterDecoy.js");

class MasterDecoy extends MasterDecoyBase {
  constructor(game) {
    super(game, "Master Decoy", "Tempest Remastered", "TPR");
  }
}

module.exports = MasterDecoy;

"use strict";
const Constants = require ("../../../Constants");
const MoltenDisasterBase = require("../setC13/MoltenDisaster");

class MoltenDisaster extends MoltenDisasterBase {
  constructor(game) {
    super(game, "Molten Disaster", "Modern Masters", "MMA");
  }
}

module.exports = MoltenDisaster;

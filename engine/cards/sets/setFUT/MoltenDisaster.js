"use strict";
const Constants = require ("../../../Constants");
const MoltenDisasterBase = require("../setC13/MoltenDisaster");

class MoltenDisaster extends MoltenDisasterBase {
  constructor(game) {
    super(game, "Molten Disaster", "Future Sight", "FUT");
  }
}

module.exports = MoltenDisaster;

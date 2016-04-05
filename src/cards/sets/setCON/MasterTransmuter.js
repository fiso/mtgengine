"use strict";
const Constants = require ("../../../Constants");
const MasterTransmuterBase = require("../setARC/MasterTransmuter");

class MasterTransmuter extends MasterTransmuterBase {
  constructor(game) {
    super(game, "Master Transmuter", "Conflux", "CON");
  }
}

module.exports = MasterTransmuter;

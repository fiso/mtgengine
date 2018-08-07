"use strict";
const Constants = require ("../../../Constants");
const GrixisSlavedriverBase = require("../setMM3/GrixisSlavedriver");

class GrixisSlavedriver extends GrixisSlavedriverBase {
  constructor (game) {
    super(game, "Grixis Slavedriver", "Conflux", "CON");
  }
}

module.exports = GrixisSlavedriver;

"use strict";
const Constants = require ("../../../Constants");
const CyclonicRiftBase = require("../setC14/CyclonicRift");

class CyclonicRift extends CyclonicRiftBase {
  constructor(game) {
    super(game, "Cyclonic Rift", "Return to Ravnica", "RTR");
  }
}

module.exports = CyclonicRift;

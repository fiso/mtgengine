"use strict";
const Constants = require ("../../../Constants");
const DisruptBase = require("../setWC02/Disrupt");

class Disrupt extends DisruptBase {
  constructor (game) {
    super(game, "Disrupt", "Invasion", "INV");
  }
}

module.exports = Disrupt;

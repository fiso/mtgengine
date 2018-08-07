"use strict";
const Constants = require ("../../../Constants");
const PortentBase = require("../setC18/Portent");

class Portent extends PortentBase {
  constructor (game) {
    super(game, "Portent", "Ice Age", "ICE");
  }
}

module.exports = Portent;

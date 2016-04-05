"use strict";
const Constants = require ("../../../Constants");
const PortentBase = require("../setCST/Portent");

class Portent extends PortentBase {
  constructor(game) {
    super(game, "Portent", "Ice Age", "ICE");
  }
}

module.exports = Portent;

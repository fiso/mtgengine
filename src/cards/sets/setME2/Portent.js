"use strict";
const Constants = require ("../../../Constants");
const PortentBase = require("../setCST/Portent");

class Portent extends PortentBase {
  constructor (game) {
    super(game, "Portent", "Masters Edition II", "ME2");
  }
}

module.exports = Portent;

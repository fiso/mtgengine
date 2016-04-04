"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConclavePhalanxBase = require("../setDDF/ConclavePhalanx.js");

class ConclavePhalanx extends ConclavePhalanxBase {
  constructor(game) {
    super(game, "Conclave Phalanx", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ConclavePhalanx;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PearlDragonBase = require("../set6ED/PearlDragon.js");

class PearlDragon extends PearlDragonBase {
  constructor(game) {
    super(game, "Pearl Dragon", "Mirage", "MIR");
  }
}

module.exports = PearlDragon;

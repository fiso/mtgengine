"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlightedShamanBase = require("../set6ED/BlightedShaman.js");

class BlightedShaman extends BlightedShamanBase {
  constructor(game) {
    super(game, "Blighted Shaman", "Mirage", "MIR");
  }
}

module.exports = BlightedShaman;

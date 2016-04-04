"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndergroundSeaBase = require("../setCED/UndergroundSea.js");

class UndergroundSea extends UndergroundSeaBase {
  constructor(game) {
    super(game, "Underground Sea", "Masters Edition II", "ME2");
  }
}

module.exports = UndergroundSea;

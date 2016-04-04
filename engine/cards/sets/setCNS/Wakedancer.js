"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WakedancerBase = require("../setDKA/Wakedancer.js");

class Wakedancer extends WakedancerBase {
  constructor(game) {
    super(game, "Wakedancer", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Wakedancer;

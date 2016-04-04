"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AeronautTinkererBase = require("../setM15/AeronautTinkerer.js");

class AeronautTinkerer extends AeronautTinkererBase {
  constructor(game) {
    super(game, "Aeronaut Tinkerer", "Media Inserts", "pMEI");
  }
}

module.exports = AeronautTinkerer;

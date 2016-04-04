"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RadjanSpiritBase = require("../set6ED/RadjanSpirit.js");

class RadjanSpirit extends RadjanSpiritBase {
  constructor(game) {
    super(game, "Radjan Spirit", "Legends", "LEG");
  }
}

module.exports = RadjanSpirit;

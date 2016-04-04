"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChaosBase = require("../setAPC/Chaos.js");

class Chaos extends ChaosBase {
  constructor(game) {
    super(game, "Chaos", "Planechase", "HOP");
  }
}

module.exports = Chaos;

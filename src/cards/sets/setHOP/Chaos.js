"use strict";
const Constants = require ("../../../Constants");
const ChaosBase = require("../setAPC/Chaos");

class Chaos extends ChaosBase {
  constructor (game) {
    super(game, "Chaos", "Planechase", "HOP");
  }
}

module.exports = Chaos;

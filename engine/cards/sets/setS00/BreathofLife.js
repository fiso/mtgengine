"use strict";
const Constants = require ("../../../Constants");
const BreathofLifeBase = require("../setPOR/BreathofLife");

class BreathofLife extends BreathofLifeBase {
  constructor(game) {
    super(game, "Breath of Life", "Starter 2000", "S00");
  }
}

module.exports = BreathofLife;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BreathofLifeBase = require("../setPOR/BreathofLife.js");

class BreathofLife extends BreathofLifeBase {
  constructor(game) {
    super(game, "Breath of Life", "Starter 1999", "S99");
  }
}

module.exports = BreathofLife;

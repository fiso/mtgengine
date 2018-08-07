"use strict";
const Constants = require ("../../../Constants");
const BreathofLifeBase = require("../setVMA/BreathofLife");

class BreathofLife extends BreathofLifeBase {
  constructor (game) {
    super(game, "Breath of Life", "Seventh Edition", "7ED");
  }
}

module.exports = BreathofLife;

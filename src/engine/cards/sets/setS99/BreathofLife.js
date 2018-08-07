"use strict";
const Constants = require ("../../../Constants");
const BreathofLifeBase = require("../setVMA/BreathofLife");

class BreathofLife extends BreathofLifeBase {
  constructor (game) {
    super(game, "Breath of Life", "Starter 1999", "S99");
  }
}

module.exports = BreathofLife;

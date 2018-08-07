"use strict";
const Constants = require ("../../../Constants");
const BreathofLifeBase = require("../setVMA/BreathofLife");

class BreathofLife extends BreathofLifeBase {
  constructor (game) {
    super(game, "Breath of Life", "Portal Second Age", "P02");
  }
}

module.exports = BreathofLife;

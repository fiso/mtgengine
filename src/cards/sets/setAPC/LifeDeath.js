"use strict";
const Constants = require ("../../../Constants");
const LifeDeathBase = require("../setDDJ/LifeDeath");

class LifeDeath extends LifeDeathBase {
  constructor (game) {
    super(game, "Life // Death", "Apocalypse", "APC");
  }
}

module.exports = LifeDeath;

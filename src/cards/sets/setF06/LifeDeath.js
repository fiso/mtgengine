"use strict";
const Constants = require ("../../../Constants");
const LifeDeathBase = require("../setDDJ/LifeDeath");

class LifeDeath extends LifeDeathBase {
  constructor (game) {
    super(game, "Life // Death", "Friday Night Magic 2006", "F06");
  }
}

module.exports = LifeDeath;

"use strict";
const Constants = require ("../../../Constants");
const ViciousHungerBase = require("../setGVL/ViciousHunger");

class ViciousHunger extends ViciousHungerBase {
  constructor (game) {
    super(game, "Vicious Hunger", "Eighth Edition", "8ED");
  }
}

module.exports = ViciousHunger;

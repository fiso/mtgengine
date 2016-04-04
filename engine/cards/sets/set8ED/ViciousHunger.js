"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViciousHungerBase = require("../setDD3_GVL/ViciousHunger.js");

class ViciousHunger extends ViciousHungerBase {
  constructor(game) {
    super(game, "Vicious Hunger", "Eighth Edition", "8ED");
  }
}

module.exports = ViciousHunger;

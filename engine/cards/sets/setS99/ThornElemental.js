"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThornElementalBase = require("../set8ED/ThornElemental.js");

class ThornElemental extends ThornElementalBase {
  constructor(game) {
    super(game, "Thorn Elemental", "Starter 1999", "S99");
  }
}

module.exports = ThornElemental;

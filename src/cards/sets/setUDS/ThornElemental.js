"use strict";
const Constants = require ("../../../Constants");
const ThornElementalBase = require("../set8ED/ThornElemental");

class ThornElemental extends ThornElementalBase {
  constructor (game) {
    super(game, "Thorn Elemental", "Urza's Destiny", "UDS");
  }
}

module.exports = ThornElemental;

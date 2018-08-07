"use strict";
const Constants = require ("../../../Constants");
const ThicketElementalBase = require("../setDDR/ThicketElemental");

class ThicketElemental extends ThicketElementalBase {
  constructor (game) {
    super(game, "Thicket Elemental", "Invasion", "INV");
  }
}

module.exports = ThicketElemental;

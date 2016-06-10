"use strict";
const Constants = require ("../../../Constants");
const EarthElementalBase = require("../setCED/EarthElemental");

class EarthElemental extends EarthElementalBase {
  constructor (game) {
    super(game, "Earth Elemental", "Unlimited Edition", "2ED");
  }
}

module.exports = EarthElemental;

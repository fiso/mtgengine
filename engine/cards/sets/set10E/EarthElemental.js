"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarthElementalBase = require("../setCED/EarthElemental.js");

class EarthElemental extends EarthElementalBase {
  constructor(game) {
    super(game, "Earth Elemental", "Tenth Edition", "10E");
  }
}

module.exports = EarthElemental;

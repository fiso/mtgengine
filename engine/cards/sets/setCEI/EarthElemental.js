"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EarthElementalBase = require("../setCED/EarthElemental.js");

class EarthElemental extends EarthElementalBase {
  constructor(game) {
    super(game, "Earth Elemental", "International Collector's Edition", "CEI");
  }
}

module.exports = EarthElemental;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FogElementalBase = require("../setBTD/FogElemental.js");

class FogElemental extends FogElementalBase {
  constructor(game) {
    super(game, "Fog Elemental", "Weatherlight", "WTH");
  }
}

module.exports = FogElemental;

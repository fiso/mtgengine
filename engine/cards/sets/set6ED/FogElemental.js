"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FogElementalBase = require("../setBTD/FogElemental.js");

class FogElemental extends FogElementalBase {
  constructor(game) {
    super(game, "Fog Elemental", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FogElemental;

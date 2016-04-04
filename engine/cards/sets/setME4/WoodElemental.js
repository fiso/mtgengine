"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodElementalBase = require("../setLEG/WoodElemental.js");

class WoodElemental extends WoodElementalBase {
  constructor(game) {
    super(game, "Wood Elemental", "Masters Edition IV", "ME4");
  }
}

module.exports = WoodElemental;

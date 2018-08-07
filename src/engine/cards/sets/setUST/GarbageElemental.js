"use strict";
const Constants = require ("../../../Constants");
const GarbageElementalBase = require("../setUST/GarbageElemental");

class GarbageElemental extends GarbageElementalBase {
  constructor (game) {
    super(game, "Garbage Elemental", "Unstable", "UST");
  }
}

module.exports = GarbageElemental;

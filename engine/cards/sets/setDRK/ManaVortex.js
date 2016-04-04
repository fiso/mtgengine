"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaVortexBase = require("../setME3/ManaVortex.js");

class ManaVortex extends ManaVortexBase {
  constructor(game) {
    super(game, "Mana Vortex", "The Dark", "DRK");
  }
}

module.exports = ManaVortex;

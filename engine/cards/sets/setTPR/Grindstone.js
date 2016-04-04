"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrindstoneBase = require("../setTMP/Grindstone.js");

class Grindstone extends GrindstoneBase {
  constructor(game) {
    super(game, "Grindstone", "Tempest Remastered", "TPR");
  }
}

module.exports = Grindstone;

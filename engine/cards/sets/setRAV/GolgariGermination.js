"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariGerminationBase = require("../setDDJ/GolgariGermination.js");

class GolgariGermination extends GolgariGerminationBase {
  constructor(game) {
    super(game, "Golgari Germination", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariGermination;

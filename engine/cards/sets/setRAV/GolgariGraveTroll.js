"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariGraveTrollBase = require("../setDDJ/GolgariGraveTroll.js");

class GolgariGraveTroll extends GolgariGraveTrollBase {
  constructor(game) {
    super(game, "Golgari Grave-Troll", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariGraveTroll;

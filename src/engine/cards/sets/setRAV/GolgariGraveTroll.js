"use strict";
const Constants = require ("../../../Constants");
const GolgariGraveTrollBase = require("../setDDJ/GolgariGraveTroll");

class GolgariGraveTroll extends GolgariGraveTrollBase {
  constructor (game) {
    super(game, "Golgari Grave-Troll", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GolgariGraveTroll;

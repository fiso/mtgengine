"use strict";
const Constants = require ("../../../Constants");
const TerrarionBase = require("../setEMN/Terrarion");

class Terrarion extends TerrarionBase {
  constructor (game) {
    super(game, "Terrarion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Terrarion;

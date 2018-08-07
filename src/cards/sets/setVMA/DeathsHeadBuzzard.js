"use strict";
const Constants = require ("../../../Constants");
const DeathsHeadBuzzardBase = require("../setA25/DeathsHeadBuzzard");

class DeathsHeadBuzzard extends DeathsHeadBuzzardBase {
  constructor (game) {
    super(game, "Death's-Head Buzzard", "Vintage Masters", "VMA");
  }
}

module.exports = DeathsHeadBuzzard;

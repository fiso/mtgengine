"use strict";
const Constants = require ("../../../Constants");
const ScreechingBuzzardBase = require("../setBBD/ScreechingBuzzard");

class ScreechingBuzzard extends ScreechingBuzzardBase {
  constructor (game) {
    super(game, "Screeching Buzzard", "Onslaught", "ONS");
  }
}

module.exports = ScreechingBuzzard;

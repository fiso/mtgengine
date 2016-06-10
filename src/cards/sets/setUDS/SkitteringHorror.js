"use strict";
const Constants = require ("../../../Constants");
const SkitteringHorrorBase = require("../setBTD/SkitteringHorror");

class SkitteringHorror extends SkitteringHorrorBase {
  constructor (game) {
    super(game, "Skittering Horror", "Urza's Destiny", "UDS");
  }
}

module.exports = SkitteringHorror;

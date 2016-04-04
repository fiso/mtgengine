"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CathedralSanctifier extends Card {
  constructor(game) {
    super(game, "Cathedral Sanctifier", "Avacyn Restored", "AVR");
  }
}

module.exports = CathedralSanctifier;

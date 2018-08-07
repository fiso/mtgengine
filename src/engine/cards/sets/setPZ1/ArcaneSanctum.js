"use strict";
const Constants = require ("../../../Constants");
const ArcaneSanctumBase = require("../setC18/ArcaneSanctum");

class ArcaneSanctum extends ArcaneSanctumBase {
  constructor (game) {
    super(game, "Arcane Sanctum", "Legendary Cube", "PZ1");
  }
}

module.exports = ArcaneSanctum;

"use strict";
const Constants = require ("../../../Constants");
const ArcaneSanctumBase = require("../setC18/ArcaneSanctum");

class ArcaneSanctum extends ArcaneSanctumBase {
  constructor (game) {
    super(game, "Arcane Sanctum", "Modern Masters 2017", "MM3");
  }
}

module.exports = ArcaneSanctum;

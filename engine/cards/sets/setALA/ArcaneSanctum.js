"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcaneSanctumBase = require("../setC13/ArcaneSanctum.js");

class ArcaneSanctum extends ArcaneSanctumBase {
  constructor(game) {
    super(game, "Arcane Sanctum", "Shards of Alara", "ALA");
  }
}

module.exports = ArcaneSanctum;

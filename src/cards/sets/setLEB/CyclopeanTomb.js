"use strict";
const Constants = require ("../../../Constants");
const CyclopeanTombBase = require("../setCED/CyclopeanTomb");

class CyclopeanTomb extends CyclopeanTombBase {
  constructor(game) {
    super(game, "Cyclopean Tomb", "Limited Edition Beta", "LEB");
  }
}

module.exports = CyclopeanTomb;

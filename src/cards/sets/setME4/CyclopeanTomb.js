"use strict";
const Constants = require ("../../../Constants");
const CyclopeanTombBase = require("../setCED/CyclopeanTomb");

class CyclopeanTomb extends CyclopeanTombBase {
  constructor(game) {
    super(game, "Cyclopean Tomb", "Masters Edition IV", "ME4");
  }
}

module.exports = CyclopeanTomb;

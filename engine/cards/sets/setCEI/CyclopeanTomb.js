"use strict";
const Constants = require ("../../../Constants");
const CyclopeanTombBase = require("../setCED/CyclopeanTomb");

class CyclopeanTomb extends CyclopeanTombBase {
  constructor(game) {
    super(game, "Cyclopean Tomb", "International Collector's Edition", "CEI");
  }
}

module.exports = CyclopeanTomb;

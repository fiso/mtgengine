"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CyclopeanTombBase = require("../setCED/CyclopeanTomb.js");

class CyclopeanTomb extends CyclopeanTombBase {
  constructor(game) {
    super(game, "Cyclopean Tomb", "Limited Edition Alpha", "LEA");
  }
}

module.exports = CyclopeanTomb;

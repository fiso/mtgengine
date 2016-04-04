"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CyclopeanTombBase = require("../setCED/CyclopeanTomb.js");

class CyclopeanTomb extends CyclopeanTombBase {
  constructor(game) {
    super(game, "Cyclopean Tomb", "Masters Edition IV", "ME4");
  }
}

module.exports = CyclopeanTomb;

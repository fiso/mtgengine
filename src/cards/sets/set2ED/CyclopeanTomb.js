"use strict";
const Constants = require ("../../../Constants");
const CyclopeanTombBase = require("../setCED/CyclopeanTomb");

class CyclopeanTomb extends CyclopeanTombBase {
  constructor (game) {
    super(game, "Cyclopean Tomb", "Unlimited Edition", "2ED");
  }
}

module.exports = CyclopeanTomb;

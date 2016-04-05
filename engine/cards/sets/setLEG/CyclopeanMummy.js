"use strict";
const Constants = require ("../../../Constants");
const CyclopeanMummyBase = require("../set4ED/CyclopeanMummy");

class CyclopeanMummy extends CyclopeanMummyBase {
  constructor(game) {
    super(game, "Cyclopean Mummy", "Legends", "LEG");
  }
}

module.exports = CyclopeanMummy;

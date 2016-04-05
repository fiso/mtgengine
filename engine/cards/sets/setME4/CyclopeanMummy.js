"use strict";
const Constants = require ("../../../Constants");
const CyclopeanMummyBase = require("../set4ED/CyclopeanMummy");

class CyclopeanMummy extends CyclopeanMummyBase {
  constructor(game) {
    super(game, "Cyclopean Mummy", "Masters Edition IV", "ME4");
  }
}

module.exports = CyclopeanMummy;

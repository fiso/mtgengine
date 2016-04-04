"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CyclopeanMummyBase = require("../set4ED/CyclopeanMummy.js");

class CyclopeanMummy extends CyclopeanMummyBase {
  constructor(game) {
    super(game, "Cyclopean Mummy", "Masters Edition IV", "ME4");
  }
}

module.exports = CyclopeanMummy;

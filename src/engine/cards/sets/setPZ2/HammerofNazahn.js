"use strict";
const Constants = require ("../../../Constants");
const HammerofNazahnBase = require("../setC17/HammerofNazahn");

class HammerofNazahn extends HammerofNazahnBase {
  constructor (game) {
    super(game, "Hammer of Nazahn", "You Make the Cube", "PZ2");
  }
}

module.exports = HammerofNazahn;

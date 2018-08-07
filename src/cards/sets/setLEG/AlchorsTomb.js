"use strict";
const Constants = require ("../../../Constants");
const AlchorsTombBase = require("../setME4/AlchorsTomb");

class AlchorsTomb extends AlchorsTombBase {
  constructor (game) {
    super(game, "Alchor's Tomb", "Legends", "LEG");
  }
}

module.exports = AlchorsTomb;

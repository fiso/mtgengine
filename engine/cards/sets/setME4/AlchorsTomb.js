"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlchorsTombBase = require("../setLEG/AlchorsTomb.js");

class AlchorsTomb extends AlchorsTombBase {
  constructor(game) {
    super(game, "Alchor's Tomb", "Masters Edition IV", "ME4");
  }
}

module.exports = AlchorsTomb;

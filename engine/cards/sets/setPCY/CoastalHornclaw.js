"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoastalHornclawBase = require("../set8ED/CoastalHornclaw.js");

class CoastalHornclaw extends CoastalHornclawBase {
  constructor(game) {
    super(game, "Coastal Hornclaw", "Prophecy", "PCY");
  }
}

module.exports = CoastalHornclaw;

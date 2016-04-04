"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorDirge extends Card {
  constructor(game) {
    super(game, "Kor Dirge", "Planar Chaos", "PLC");
  }
}

module.exports = KorDirge;

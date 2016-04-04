"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreacherousUrge extends Card {
  constructor(game) {
    super(game, "Treacherous Urge", "Planar Chaos", "PLC");
  }
}

module.exports = TreacherousUrge;

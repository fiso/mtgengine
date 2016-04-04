"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinkintoTakenuma extends Card {
  constructor(game) {
    super(game, "Sink into Takenuma", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SinkintoTakenuma;

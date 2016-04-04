"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VengefulDead extends Card {
  constructor(game) {
    super(game, "Vengeful Dead", "Scourge", "SCG");
  }
}

module.exports = VengefulDead;

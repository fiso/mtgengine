"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MirritheCursed extends Card {
  constructor(game) {
    super(game, "Mirri the Cursed", "Planar Chaos", "PLC");
  }
}

module.exports = MirritheCursed;

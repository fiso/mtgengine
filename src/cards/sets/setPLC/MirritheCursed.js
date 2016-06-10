"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirritheCursed extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirri the Cursed", "Planar Chaos", "PLC");
  }
}

module.exports = MirritheCursed;

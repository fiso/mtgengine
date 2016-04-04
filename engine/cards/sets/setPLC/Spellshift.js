"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellshift extends UnimplementedCard {
  constructor(game) {
    super(game, "Spellshift", "Planar Chaos", "PLC");
  }
}

module.exports = Spellshift;

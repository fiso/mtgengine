"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenShackles extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Shackles", "Kaladesh Inventions", "MPS");
  }
}

module.exports = VedalkenShackles;

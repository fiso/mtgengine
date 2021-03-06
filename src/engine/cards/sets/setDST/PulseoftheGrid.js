"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PulseoftheGrid extends UnimplementedCard {
  constructor (game) {
    super(game, "Pulse of the Grid", "Darksteel", "DST");
  }
}

module.exports = PulseoftheGrid;

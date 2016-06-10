"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfectiousHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Infectious Horror", "Archenemy", "ARC");
  }
}

module.exports = InfectiousHorror;

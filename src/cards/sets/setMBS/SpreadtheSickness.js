"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpreadtheSickness extends UnimplementedCard {
  constructor (game) {
    super(game, "Spread the Sickness", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpreadtheSickness;

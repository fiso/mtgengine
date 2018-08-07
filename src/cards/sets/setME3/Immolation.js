"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Immolation extends UnimplementedCard {
  constructor (game) {
    super(game, "Immolation", "Masters Edition III", "ME3");
  }
}

module.exports = Immolation;

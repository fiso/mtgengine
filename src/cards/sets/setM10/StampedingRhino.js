"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StampedingRhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Stampeding Rhino", "Magic 2010", "M10");
  }
}

module.exports = StampedingRhino;

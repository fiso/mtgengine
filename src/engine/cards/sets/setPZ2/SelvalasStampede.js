"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelvalasStampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Selvala's Stampede", "You Make the Cube", "PZ2");
  }
}

module.exports = SelvalasStampede;

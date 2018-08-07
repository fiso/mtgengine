"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralIncarnation extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Incarnation", "Magic 2015", "M15");
  }
}

module.exports = FeralIncarnation;

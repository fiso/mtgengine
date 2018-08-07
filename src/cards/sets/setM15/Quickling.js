"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quickling extends UnimplementedCard {
  constructor (game) {
    super(game, "Quickling", "Magic 2015", "M15");
  }
}

module.exports = Quickling;

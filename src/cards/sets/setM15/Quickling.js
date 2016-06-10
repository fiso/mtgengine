"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quickling extends UnimplementedCard {
  constructor (game) {
    super(game, "Quickling", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Quickling;

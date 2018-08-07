"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeMonolith extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Monolith", "Masters Edition IV", "ME4");
  }
}

module.exports = JadeMonolith;

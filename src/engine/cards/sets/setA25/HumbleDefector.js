"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumbleDefector extends UnimplementedCard {
  constructor (game) {
    super(game, "Humble Defector", "Masters 25", "A25");
  }
}

module.exports = HumbleDefector;

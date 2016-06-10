"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumbleDefector extends UnimplementedCard {
  constructor (game) {
    super(game, "Humble Defector", "Fate Reforged", "FRF");
  }
}

module.exports = HumbleDefector;

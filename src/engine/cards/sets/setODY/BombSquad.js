"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BombSquad extends UnimplementedCard {
  constructor (game) {
    super(game, "Bomb Squad", "Odyssey", "ODY");
  }
}

module.exports = BombSquad;

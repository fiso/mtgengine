"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fireball extends UnimplementedCard {
  constructor (game) {
    super(game, "Fireball", "Anthologies", "ATH");
  }
}

module.exports = Fireball;

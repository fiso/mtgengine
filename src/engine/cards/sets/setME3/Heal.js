"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Heal extends UnimplementedCard {
  constructor (game) {
    super(game, "Heal", "Masters Edition III", "ME3");
  }
}

module.exports = Heal;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwoopingTalon extends UnimplementedCard {
  constructor(game) {
    super(game, "Swooping Talon", "Legions", "LGN");
  }
}

module.exports = SwoopingTalon;

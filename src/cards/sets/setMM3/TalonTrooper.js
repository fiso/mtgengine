"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalonTrooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Talon Trooper", "Modern Masters 2017", "MM3");
  }
}

module.exports = TalonTrooper;

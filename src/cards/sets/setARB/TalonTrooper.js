"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalonTrooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Talon Trooper", "Alara Reborn", "ARB");
  }
}

module.exports = TalonTrooper;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorsStand extends UnimplementedCard {
  constructor (game) {
    super(game, "Warrior's Stand", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WarriorsStand;

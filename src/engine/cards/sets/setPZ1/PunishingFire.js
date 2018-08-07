"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PunishingFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Punishing Fire", "Legendary Cube", "PZ1");
  }
}

module.exports = PunishingFire;

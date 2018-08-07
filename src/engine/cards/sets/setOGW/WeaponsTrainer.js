"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeaponsTrainer extends UnimplementedCard {
  constructor (game) {
    super(game, "Weapons Trainer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WeaponsTrainer;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoorDie extends UnimplementedCard {
  constructor(game) {
    super(game, "Do or Die", "Invasion", "INV");
  }
}

module.exports = DoorDie;

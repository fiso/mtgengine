"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeeBeeGun extends UnimplementedCard {
  constructor (game) {
    super(game, "Bee-Bee Gun", "Unstable", "UST");
  }
}

module.exports = BeeBeeGun;

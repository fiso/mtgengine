"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimDeathmantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Nim Deathmantle", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NimDeathmantle;

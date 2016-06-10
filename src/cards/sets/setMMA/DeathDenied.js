"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathDenied extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Denied", "Modern Masters", "MMA");
  }
}

module.exports = DeathDenied;

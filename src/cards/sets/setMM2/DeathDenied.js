"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathDenied extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Denied", "Modern Masters 2015", "MM2");
  }
}

module.exports = DeathDenied;

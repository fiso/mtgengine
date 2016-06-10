"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demolish extends UnimplementedCard {
  constructor (game) {
    super(game, "Demolish", "Avacyn Restored", "AVR");
  }
}

module.exports = Demolish;

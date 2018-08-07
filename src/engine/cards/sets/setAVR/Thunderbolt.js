"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thunderbolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunderbolt", "Avacyn Restored", "AVR");
  }
}

module.exports = Thunderbolt;

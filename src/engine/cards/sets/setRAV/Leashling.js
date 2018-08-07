"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Leashling extends UnimplementedCard {
  constructor (game) {
    super(game, "Leashling", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Leashling;

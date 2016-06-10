"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terrarion extends UnimplementedCard {
  constructor (game) {
    super(game, "Terrarion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Terrarion;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Grozoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Grozoth", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Grozoth;

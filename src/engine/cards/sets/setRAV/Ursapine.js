"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ursapine extends UnimplementedCard {
  constructor (game) {
    super(game, "Ursapine", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Ursapine;

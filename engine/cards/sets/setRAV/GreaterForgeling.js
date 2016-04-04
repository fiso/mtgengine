"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterForgeling extends UnimplementedCard {
  constructor(game) {
    super(game, "Greater Forgeling", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GreaterForgeling;

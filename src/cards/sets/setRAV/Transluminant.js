"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Transluminant extends UnimplementedCard {
  constructor(game) {
    super(game, "Transluminant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Transluminant;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quickchange extends UnimplementedCard {
  constructor(game) {
    super(game, "Quickchange", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Quickchange;

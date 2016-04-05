"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindmoil extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindmoil", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Mindmoil;

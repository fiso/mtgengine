"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brightflame extends UnimplementedCard {
  constructor(game) {
    super(game, "Brightflame", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Brightflame;

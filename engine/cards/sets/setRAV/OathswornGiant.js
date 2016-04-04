"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OathswornGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Oathsworn Giant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = OathswornGiant;

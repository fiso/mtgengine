"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InduceParanoia extends UnimplementedCard {
  constructor(game) {
    super(game, "Induce Paranoia", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = InduceParanoia;

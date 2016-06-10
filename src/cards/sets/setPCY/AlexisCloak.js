"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlexisCloak extends UnimplementedCard {
  constructor (game) {
    super(game, "Alexi's Cloak", "Prophecy", "PCY");
  }
}

module.exports = AlexisCloak;

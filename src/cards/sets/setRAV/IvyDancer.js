"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvyDancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivy Dancer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = IvyDancer;

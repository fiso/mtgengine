"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedBurial extends UnimplementedCard {
  constructor (game) {
    super(game, "Hallowed Burial", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HallowedBurial;

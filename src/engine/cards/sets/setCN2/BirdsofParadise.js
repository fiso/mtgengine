"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BirdsofParadise extends UnimplementedCard {
  constructor (game) {
    super(game, "Birds of Paradise", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = BirdsofParadise;

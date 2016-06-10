"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BirdsofParadise extends UnimplementedCard {
  constructor (game) {
    super(game, "Birds of Paradise", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BirdsofParadise;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BirdMaiden extends UnimplementedCard {
  constructor (game) {
    super(game, "Bird Maiden", "Masters Edition IV", "ME4");
  }
}

module.exports = BirdMaiden;

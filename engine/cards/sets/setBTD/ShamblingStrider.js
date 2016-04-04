"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingStrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Shambling Strider", "Beatdown Box Set", "BTD");
  }
}

module.exports = ShamblingStrider;

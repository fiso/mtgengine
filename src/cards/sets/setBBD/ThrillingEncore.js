"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrillingEncore extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrilling Encore", "Battlebond", "BBD");
  }
}

module.exports = ThrillingEncore;

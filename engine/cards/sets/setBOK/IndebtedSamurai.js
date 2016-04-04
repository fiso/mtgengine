"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndebtedSamurai extends UnimplementedCard {
  constructor(game) {
    super(game, "Indebted Samurai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = IndebtedSamurai;

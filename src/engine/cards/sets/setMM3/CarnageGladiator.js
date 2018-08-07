"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnageGladiator extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnage Gladiator", "Modern Masters 2017", "MM3");
  }
}

module.exports = CarnageGladiator;

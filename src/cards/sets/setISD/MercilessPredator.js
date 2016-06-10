"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercilessPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Merciless Predator", "Innistrad", "ISD");
  }
}

module.exports = MercilessPredator;

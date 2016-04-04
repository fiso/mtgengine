"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercilessPredator extends Card {
  constructor(game) {
    super(game, "Merciless Predator", "Innistrad", "ISD");
  }
}

module.exports = MercilessPredator;

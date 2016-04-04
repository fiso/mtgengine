"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraftedExoskeleton extends Card {
  constructor(game) {
    super(game, "Grafted Exoskeleton", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GraftedExoskeleton;

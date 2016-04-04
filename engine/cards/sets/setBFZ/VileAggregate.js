"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VileAggregate extends Card {
  constructor(game) {
    super(game, "Vile Aggregate", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VileAggregate;

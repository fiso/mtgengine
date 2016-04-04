"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorgueTheft extends Card {
  constructor(game) {
    super(game, "Morgue Theft", "Odyssey", "ODY");
  }
}

module.exports = MorgueTheft;

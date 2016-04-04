"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealmsUncharted extends Card {
  constructor(game) {
    super(game, "Realms Uncharted", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RealmsUncharted;

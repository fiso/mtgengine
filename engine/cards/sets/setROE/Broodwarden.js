"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Broodwarden extends Card {
  constructor(game) {
    super(game, "Broodwarden", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Broodwarden;

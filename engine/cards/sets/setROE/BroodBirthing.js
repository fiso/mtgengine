"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BroodBirthing extends Card {
  constructor(game) {
    super(game, "Brood Birthing", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BroodBirthing;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FracturedLoyalty extends Card {
  constructor(game) {
    super(game, "Fractured Loyalty", "Mirrodin", "MRD");
  }
}

module.exports = FracturedLoyalty;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldenUrn extends Card {
  constructor(game) {
    super(game, "Golden Urn", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GoldenUrn;

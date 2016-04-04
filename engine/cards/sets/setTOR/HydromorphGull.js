"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HydromorphGull extends Card {
  constructor(game) {
    super(game, "Hydromorph Gull", "Torment", "TOR");
  }
}

module.exports = HydromorphGull;

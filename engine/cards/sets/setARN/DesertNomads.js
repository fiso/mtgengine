"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesertNomads extends Card {
  constructor(game) {
    super(game, "Desert Nomads", "Arabian Nights", "ARN");
  }
}

module.exports = DesertNomads;

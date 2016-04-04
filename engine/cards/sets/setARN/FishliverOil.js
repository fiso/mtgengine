"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FishliverOil extends Card {
  constructor(game) {
    super(game, "Fishliver Oil", "Arabian Nights", "ARN");
  }
}

module.exports = FishliverOil;

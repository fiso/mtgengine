"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FavoredHoplite extends Card {
  constructor(game) {
    super(game, "Favored Hoplite", "Theros", "THS");
  }
}

module.exports = FavoredHoplite;

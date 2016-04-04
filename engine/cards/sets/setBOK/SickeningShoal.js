"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SickeningShoal extends Card {
  constructor(game) {
    super(game, "Sickening Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SickeningShoal;

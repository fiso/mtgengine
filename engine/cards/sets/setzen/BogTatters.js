"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogTatters extends Card {
  constructor(game) {
    super(game, "Bog Tatters", "Zendikar", "ZEN");
  }
}

module.exports = BogTatters;

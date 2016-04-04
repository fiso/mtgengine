"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HumbleBudoka extends Card {
  constructor(game) {
    super(game, "Humble Budoka", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HumbleBudoka;

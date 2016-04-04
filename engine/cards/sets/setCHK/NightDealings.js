"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightDealings extends Card {
  constructor(game) {
    super(game, "Night Dealings", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NightDealings;

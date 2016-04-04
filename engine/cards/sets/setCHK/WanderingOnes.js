"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderingOnes extends Card {
  constructor(game) {
    super(game, "Wandering Ones", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WanderingOnes;

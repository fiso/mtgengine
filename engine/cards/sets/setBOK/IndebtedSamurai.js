"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndebtedSamurai extends Card {
  constructor(game) {
    super(game, "Indebted Samurai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = IndebtedSamurai;

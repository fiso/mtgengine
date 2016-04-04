"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverstormSamurai extends Card {
  constructor(game) {
    super(game, "Silverstorm Samurai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SilverstormSamurai;

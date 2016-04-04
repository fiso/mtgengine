"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DisruptingShoal extends Card {
  constructor(game) {
    super(game, "Disrupting Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = DisruptingShoal;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofBlades extends Card {
  constructor(game) {
    super(game, "Rain of Blades", "Eighth Edition", "8ED");
  }
}

module.exports = RainofBlades;

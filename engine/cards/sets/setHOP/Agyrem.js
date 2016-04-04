"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Agyrem extends Card {
  constructor(game) {
    super(game, "Agyrem", "Planechase", "HOP");
  }
}

module.exports = Agyrem;

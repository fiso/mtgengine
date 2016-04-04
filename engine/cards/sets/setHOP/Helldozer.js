"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Helldozer extends Card {
  constructor(game) {
    super(game, "Helldozer", "Planechase", "HOP");
  }
}

module.exports = Helldozer;

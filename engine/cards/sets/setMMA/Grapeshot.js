"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Grapeshot extends Card {
  constructor(game) {
    super(game, "Grapeshot", "Modern Masters", "MMA");
  }
}

module.exports = Grapeshot;

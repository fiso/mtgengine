"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianWarMakers extends Card {
  constructor(game) {
    super(game, "Balduvian War-Makers", "Alliances", "ALL");
  }
}

module.exports = BalduvianWarMakers;

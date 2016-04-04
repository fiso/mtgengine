"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SultaiCharm extends Card {
  constructor(game) {
    super(game, "Sultai Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiCharm;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PietyCharm extends Card {
  constructor(game) {
    super(game, "Piety Charm", "Onslaught", "ONS");
  }
}

module.exports = PietyCharm;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HearthCharm extends Card {
  constructor(game) {
    super(game, "Hearth Charm", "Visions", "VIS");
  }
}

module.exports = HearthCharm;

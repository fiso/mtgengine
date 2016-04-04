"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmeraldCharm extends Card {
  constructor(game) {
    super(game, "Emerald Charm", "Visions", "VIS");
  }
}

module.exports = EmeraldCharm;

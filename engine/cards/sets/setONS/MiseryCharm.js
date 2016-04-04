"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MiseryCharm extends Card {
  constructor(game) {
    super(game, "Misery Charm", "Onslaught", "ONS");
  }
}

module.exports = MiseryCharm;

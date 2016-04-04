"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrickeryCharm extends Card {
  constructor(game) {
    super(game, "Trickery Charm", "Onslaught", "ONS");
  }
}

module.exports = TrickeryCharm;

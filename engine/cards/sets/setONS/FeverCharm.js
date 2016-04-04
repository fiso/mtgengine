"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeverCharm extends Card {
  constructor(game) {
    super(game, "Fever Charm", "Onslaught", "ONS");
  }
}

module.exports = FeverCharm;

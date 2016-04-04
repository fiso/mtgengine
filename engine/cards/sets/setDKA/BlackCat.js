"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackCat extends Card {
  constructor(game) {
    super(game, "Black Cat", "Dark Ascension", "DKA");
  }
}

module.exports = BlackCat;

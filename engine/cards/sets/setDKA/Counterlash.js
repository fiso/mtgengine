"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Counterlash extends Card {
  constructor(game) {
    super(game, "Counterlash", "Dark Ascension", "DKA");
  }
}

module.exports = Counterlash;

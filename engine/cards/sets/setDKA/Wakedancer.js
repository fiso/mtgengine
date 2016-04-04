"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wakedancer extends Card {
  constructor(game) {
    super(game, "Wakedancer", "Dark Ascension", "DKA");
  }
}

module.exports = Wakedancer;

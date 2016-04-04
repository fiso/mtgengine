"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighbornGhoul extends Card {
  constructor(game) {
    super(game, "Highborn Ghoul", "Dark Ascension", "DKA");
  }
}

module.exports = HighbornGhoul;

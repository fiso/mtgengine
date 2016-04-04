"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Helvault extends Card {
  constructor(game) {
    super(game, "Helvault", "Dark Ascension", "DKA");
  }
}

module.exports = Helvault;

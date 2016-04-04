"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Exhume extends Card {
  constructor(game) {
    super(game, "Exhume", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Exhume;

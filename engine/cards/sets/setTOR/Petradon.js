"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Petradon extends Card {
  constructor(game) {
    super(game, "Petradon", "Torment", "TOR");
  }
}

module.exports = Petradon;

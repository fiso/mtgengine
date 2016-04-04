"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruCavalier extends Card {
  constructor(game) {
    super(game, "Daru Cavalier", "Onslaught", "ONS");
  }
}

module.exports = DaruCavalier;

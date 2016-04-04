"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightoftheReliquary extends Card {
  constructor(game) {
    super(game, "Knight of the Reliquary", "Conflux", "CON");
  }
}

module.exports = KnightoftheReliquary;

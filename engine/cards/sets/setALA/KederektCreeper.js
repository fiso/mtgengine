"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KederektCreeper extends Card {
  constructor(game) {
    super(game, "Kederekt Creeper", "Shards of Alara", "ALA");
  }
}

module.exports = KederektCreeper;

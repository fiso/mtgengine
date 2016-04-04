"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZurgoBellstriker extends Card {
  constructor(game) {
    super(game, "Zurgo Bellstriker", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ZurgoBellstriker;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinDarkDwellers extends Card {
  constructor(game) {
    super(game, "Goblin Dark-Dwellers", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GoblinDarkDwellers;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildAesthir extends Card {
  constructor(game) {
    super(game, "Wild Aesthir", "Alliances", "ALL");
  }
}

module.exports = WildAesthir;

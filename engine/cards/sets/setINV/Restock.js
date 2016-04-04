"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Restock extends Card {
  constructor(game) {
    super(game, "Restock", "Invasion", "INV");
  }
}

module.exports = Restock;

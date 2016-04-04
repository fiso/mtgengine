"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GodosIrregulars extends Card {
  constructor(game) {
    super(game, "Godo's Irregulars", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GodosIrregulars;

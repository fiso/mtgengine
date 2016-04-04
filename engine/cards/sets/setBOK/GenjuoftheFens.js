"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GenjuoftheFens extends Card {
  constructor(game) {
    super(game, "Genju of the Fens", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheFens;

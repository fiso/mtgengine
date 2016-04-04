"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GenjuoftheCedars extends Card {
  constructor(game) {
    super(game, "Genju of the Cedars", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheCedars;

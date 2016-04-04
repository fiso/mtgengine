"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GenjuoftheFields extends Card {
  constructor(game) {
    super(game, "Genju of the Fields", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GenjuoftheFields;

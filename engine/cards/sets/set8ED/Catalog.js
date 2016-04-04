"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Catalog extends Card {
  constructor(game) {
    super(game, "Catalog", "Eighth Edition", "8ED");
  }
}

module.exports = Catalog;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InkDissolver extends Card {
  constructor(game) {
    super(game, "Ink Dissolver", "Morningtide", "MOR");
  }
}

module.exports = InkDissolver;

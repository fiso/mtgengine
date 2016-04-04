"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sizzle extends Card {
  constructor(game) {
    super(game, "Sizzle", "Eighth Edition", "8ED");
  }
}

module.exports = Sizzle;

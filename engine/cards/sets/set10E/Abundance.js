"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Abundance extends Card {
  constructor(game) {
    super(game, "Abundance", "Tenth Edition", "10E");
  }
}

module.exports = Abundance;

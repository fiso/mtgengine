"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stingmoggie extends Card {
  constructor(game) {
    super(game, "Stingmoggie", "Morningtide", "MOR");
  }
}

module.exports = Stingmoggie;

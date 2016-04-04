"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreatbowDoyen extends Card {
  constructor(game) {
    super(game, "Greatbow Doyen", "Morningtide", "MOR");
  }
}

module.exports = GreatbowDoyen;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RichardGarfieldPhD extends Card {
  constructor(game) {
    super(game, "Richard Garfield, Ph.D.", "Unhinged", "UNH");
  }
}

module.exports = RichardGarfieldPhD;

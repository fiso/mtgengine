"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Morningtide extends Card {
  constructor(game) {
    super(game, "Morningtide", "Torment", "TOR");
  }
}

module.exports = Morningtide;

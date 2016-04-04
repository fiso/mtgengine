"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Earthbrawn extends Card {
  constructor(game) {
    super(game, "Earthbrawn", "Morningtide", "MOR");
  }
}

module.exports = Earthbrawn;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deglamer extends Card {
  constructor(game) {
    super(game, "Deglamer", "Morningtide", "MOR");
  }
}

module.exports = Deglamer;

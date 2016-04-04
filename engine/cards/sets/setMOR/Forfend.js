"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Forfend extends Card {
  constructor(game) {
    super(game, "Forfend", "Morningtide", "MOR");
  }
}

module.exports = Forfend;

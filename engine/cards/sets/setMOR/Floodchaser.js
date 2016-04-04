"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Floodchaser extends Card {
  constructor(game) {
    super(game, "Floodchaser", "Morningtide", "MOR");
  }
}

module.exports = Floodchaser;

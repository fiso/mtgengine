"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deconstruct extends Card {
  constructor(game) {
    super(game, "Deconstruct", "Mirrodin", "MRD");
  }
}

module.exports = Deconstruct;

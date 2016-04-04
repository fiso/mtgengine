"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vengevine extends Card {
  constructor(game) {
    super(game, "Vengevine", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Vengevine;

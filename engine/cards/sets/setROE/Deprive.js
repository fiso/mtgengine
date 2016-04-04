"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Deprive extends Card {
  constructor(game) {
    super(game, "Deprive", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Deprive;

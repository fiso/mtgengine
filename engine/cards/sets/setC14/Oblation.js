"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Oblation extends Card {
  constructor(game) {
    super(game, "Oblation", "Commander 2014", "C14");
  }
}

module.exports = Oblation;

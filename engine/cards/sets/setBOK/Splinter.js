"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Splinter extends Card {
  constructor(game) {
    super(game, "Splinter", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Splinter;

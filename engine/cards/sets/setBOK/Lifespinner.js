"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lifespinner extends Card {
  constructor(game) {
    super(game, "Lifespinner", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Lifespinner;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tallowisp extends Card {
  constructor(game) {
    super(game, "Tallowisp", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Tallowisp;

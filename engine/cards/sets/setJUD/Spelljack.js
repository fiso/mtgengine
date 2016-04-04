"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spelljack extends Card {
  constructor(game) {
    super(game, "Spelljack", "Judgment", "JUD");
  }
}

module.exports = Spelljack;

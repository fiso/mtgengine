"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Heartstone extends Card {
  constructor(game) {
    super(game, "Heartstone", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = Heartstone;

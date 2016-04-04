"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CardboardCarapace extends Card {
  constructor(game) {
    super(game, "Cardboard Carapace", "Unglued", "UGL");
  }
}

module.exports = CardboardCarapace;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MortisDogs extends Card {
  constructor(game) {
    super(game, "Mortis Dogs", "New Phyrexia", "NPH");
  }
}

module.exports = MortisDogs;

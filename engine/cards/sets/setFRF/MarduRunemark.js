"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarduRunemark extends Card {
  constructor(game) {
    super(game, "Mardu Runemark", "Fate Reforged", "FRF");
  }
}

module.exports = MarduRunemark;

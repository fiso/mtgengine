"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HandofDeath extends Card {
  constructor(game) {
    super(game, "Hand of Death", "Portal", "POR");
  }
}

module.exports = HandofDeath;

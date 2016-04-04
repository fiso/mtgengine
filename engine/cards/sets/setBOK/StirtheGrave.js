"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StirtheGrave extends Card {
  constructor(game) {
    super(game, "Stir the Grave", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = StirtheGrave;

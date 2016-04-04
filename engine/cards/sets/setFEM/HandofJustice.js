"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HandofJustice extends Card {
  constructor(game) {
    super(game, "Hand of Justice", "Fallen Empires", "FEM");
  }
}

module.exports = HandofJustice;

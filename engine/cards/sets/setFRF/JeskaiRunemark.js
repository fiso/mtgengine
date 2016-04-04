"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiRunemark extends Card {
  constructor(game) {
    super(game, "Jeskai Runemark", "Fate Reforged", "FRF");
  }
}

module.exports = JeskaiRunemark;

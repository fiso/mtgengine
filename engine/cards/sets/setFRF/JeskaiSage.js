"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiSage extends Card {
  constructor(game) {
    super(game, "Jeskai Sage", "Fate Reforged", "FRF");
  }
}

module.exports = JeskaiSage;

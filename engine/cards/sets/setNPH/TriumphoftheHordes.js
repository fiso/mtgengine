"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TriumphoftheHordes extends Card {
  constructor(game) {
    super(game, "Triumph of the Hordes", "New Phyrexia", "NPH");
  }
}

module.exports = TriumphoftheHordes;

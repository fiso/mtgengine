"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuneclawBear extends Card {
  constructor(game) {
    super(game, "Runeclaw Bear", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RuneclawBear;

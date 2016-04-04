"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NewFrontiers extends Card {
  constructor(game) {
    super(game, "New Frontiers", "Odyssey", "ODY");
  }
}

module.exports = NewFrontiers;

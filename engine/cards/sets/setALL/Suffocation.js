"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Suffocation extends Card {
  constructor(game) {
    super(game, "Suffocation", "Alliances", "ALL");
  }
}

module.exports = Suffocation;

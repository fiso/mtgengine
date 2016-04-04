"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DumbAss extends Card {
  constructor(game) {
    super(game, "Dumb Ass", "Unhinged", "UNH");
  }
}

module.exports = DumbAss;

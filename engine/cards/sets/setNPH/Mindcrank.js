"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mindcrank extends Card {
  constructor(game) {
    super(game, "Mindcrank", "New Phyrexia", "NPH");
  }
}

module.exports = Mindcrank;

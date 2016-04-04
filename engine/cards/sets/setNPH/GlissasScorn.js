"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlissasScorn extends Card {
  constructor(game) {
    super(game, "Glissa's Scorn", "New Phyrexia", "NPH");
  }
}

module.exports = GlissasScorn;

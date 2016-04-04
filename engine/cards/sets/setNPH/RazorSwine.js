"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorSwine extends Card {
  constructor(game) {
    super(game, "Razor Swine", "New Phyrexia", "NPH");
  }
}

module.exports = RazorSwine;

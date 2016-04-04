"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorBoomerang extends Card {
  constructor(game) {
    super(game, "Razor Boomerang", "Worldwake", "WWK");
  }
}

module.exports = RazorBoomerang;

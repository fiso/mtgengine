"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RefractionTrap extends Card {
  constructor(game) {
    super(game, "Refraction Trap", "Worldwake", "WWK");
  }
}

module.exports = RefractionTrap;

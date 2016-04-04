"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RicochetTrap extends Card {
  constructor(game) {
    super(game, "Ricochet Trap", "Worldwake", "WWK");
  }
}

module.exports = RicochetTrap;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PermafrostTrap extends Card {
  constructor(game) {
    super(game, "Permafrost Trap", "Worldwake", "WWK");
  }
}

module.exports = PermafrostTrap;

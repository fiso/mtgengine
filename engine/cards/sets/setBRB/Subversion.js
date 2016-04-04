"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Subversion extends Card {
  constructor(game) {
    super(game, "Subversion", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Subversion;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveShellScarab extends Card {
  constructor(game) {
    super(game, "Grave-Shell Scarab", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GraveShellScarab;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostTown extends Card {
  constructor(game) {
    super(game, "Ghost Town", "Tempest", "TMP");
  }
}

module.exports = GhostTown;

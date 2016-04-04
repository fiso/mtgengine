"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostHounds extends Card {
  constructor(game) {
    super(game, "Ghost Hounds", "Homelands", "HML");
  }
}

module.exports = GhostHounds;

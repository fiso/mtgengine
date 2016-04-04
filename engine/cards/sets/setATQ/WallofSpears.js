"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofSpears extends Card {
  constructor(game) {
    super(game, "Wall of Spears", "Antiquities", "ATQ");
  }
}

module.exports = WallofSpears;

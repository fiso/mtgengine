"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshnodsAltar extends Card {
  constructor(game) {
    super(game, "Ashnod's Altar", "Antiquities", "ATQ");
  }
}

module.exports = AshnodsAltar;

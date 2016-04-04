"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasAvenger extends Card {
  constructor(game) {
    super(game, "Gaea's Avenger", "Antiquities", "ATQ");
  }
}

module.exports = GaeasAvenger;

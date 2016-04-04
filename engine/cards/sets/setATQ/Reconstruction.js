"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reconstruction extends Card {
  constructor(game) {
    super(game, "Reconstruction", "Antiquities", "ATQ");
  }
}

module.exports = Reconstruction;

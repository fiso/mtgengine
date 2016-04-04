"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamiteElder extends Card {
  constructor(game) {
    super(game, "Samite Elder", "Planeshift", "PLS");
  }
}

module.exports = SamiteElder;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hobble extends Card {
  constructor(game) {
    super(game, "Hobble", "Planeshift", "PLS");
  }
}

module.exports = Hobble;

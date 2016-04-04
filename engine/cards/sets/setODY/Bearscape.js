"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bearscape extends Card {
  constructor(game) {
    super(game, "Bearscape", "Odyssey", "ODY");
  }
}

module.exports = Bearscape;

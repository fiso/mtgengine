"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sandskin extends Card {
  constructor(game) {
    super(game, "Sandskin", "Onslaught", "ONS");
  }
}

module.exports = Sandskin;

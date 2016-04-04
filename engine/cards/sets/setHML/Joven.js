"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Joven extends Card {
  constructor(game) {
    super(game, "Joven", "Homelands", "HML");
  }
}

module.exports = Joven;

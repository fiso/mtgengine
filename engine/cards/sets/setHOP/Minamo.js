"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Minamo extends Card {
  constructor(game) {
    super(game, "Minamo", "Planechase", "HOP");
  }
}

module.exports = Minamo;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Leeches extends Card {
  constructor(game) {
    super(game, "Leeches", "Homelands", "HML");
  }
}

module.exports = Leeches;

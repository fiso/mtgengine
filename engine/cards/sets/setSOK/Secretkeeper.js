"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Secretkeeper extends Card {
  constructor(game) {
    super(game, "Secretkeeper", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Secretkeeper;

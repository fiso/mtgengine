"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DenseCanopy extends Card {
  constructor(game) {
    super(game, "Dense Canopy", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DenseCanopy;

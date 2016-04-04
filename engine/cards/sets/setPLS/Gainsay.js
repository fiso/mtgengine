"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gainsay extends Card {
  constructor(game) {
    super(game, "Gainsay", "Planeshift", "PLS");
  }
}

module.exports = Gainsay;

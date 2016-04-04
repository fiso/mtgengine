"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChameleonBlur extends Card {
  constructor(game) {
    super(game, "Chameleon Blur", "Time Spiral", "TSP");
  }
}

module.exports = ChameleonBlur;

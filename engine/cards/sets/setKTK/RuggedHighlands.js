"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuggedHighlandsBase = require("../setFRF/RuggedHighlands.js");

class RuggedHighlands extends RuggedHighlandsBase {
  constructor(game) {
    super(game, "Rugged Highlands", "Khans of Tarkir", "KTK");
  }
}

module.exports = RuggedHighlands;

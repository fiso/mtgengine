"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Devastate extends Card {
  constructor(game) {
    super(game, "Devastate", "Prophecy", "PCY");
  }
}

module.exports = Devastate;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaBurst extends Card {
  constructor(game) {
    super(game, "Magma Burst", "Planeshift", "PLS");
  }
}

module.exports = MagmaBurst;

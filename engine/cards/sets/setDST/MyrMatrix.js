"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyrMatrix extends Card {
  constructor(game) {
    super(game, "Myr Matrix", "Darksteel", "DST");
  }
}

module.exports = MyrMatrix;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheloniteMonk extends Card {
  constructor(game) {
    super(game, "Thelonite Monk", "Fallen Empires", "FEM");
  }
}

module.exports = TheloniteMonk;

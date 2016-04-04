"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WintersGrasp extends Card {
  constructor(game) {
    super(game, "Winter's Grasp", "Portal", "POR");
  }
}

module.exports = WintersGrasp;

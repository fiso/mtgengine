"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuirionExplorer extends Card {
  constructor(game) {
    super(game, "Quirion Explorer", "Planeshift", "PLS");
  }
}

module.exports = QuirionExplorer;

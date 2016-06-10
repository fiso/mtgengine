"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuirionExplorer extends UnimplementedCard {
  constructor (game) {
    super(game, "Quirion Explorer", "Planeshift", "PLS");
  }
}

module.exports = QuirionExplorer;

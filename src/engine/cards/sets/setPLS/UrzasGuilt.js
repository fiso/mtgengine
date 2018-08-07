"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasGuilt extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Guilt", "Planeshift", "PLS");
  }
}

module.exports = UrzasGuilt;

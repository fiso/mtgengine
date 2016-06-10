"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Kavu", "Planeshift", "PLS");
  }
}

module.exports = StoneKavu;

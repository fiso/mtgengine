"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MireKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Mire Kavu", "Planeshift", "PLS");
  }
}

module.exports = MireKavu;

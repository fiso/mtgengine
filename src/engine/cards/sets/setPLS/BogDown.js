"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Down", "Planeshift", "PLS");
  }
}

module.exports = BogDown;

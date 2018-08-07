"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestructiveFlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Destructive Flow", "Planeshift", "PLS");
  }
}

module.exports = DestructiveFlow;

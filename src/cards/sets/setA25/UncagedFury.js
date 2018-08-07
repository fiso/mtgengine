"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncagedFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Uncaged Fury", "Masters 25", "A25");
  }
}

module.exports = UncagedFury;

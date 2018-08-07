"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class X extends UnimplementedCard {
  constructor (game) {
    super(game, "X", "Unstable", "UST");
  }
}

module.exports = X;

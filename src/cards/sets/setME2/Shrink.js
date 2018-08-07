"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shrink extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrink", "Masters Edition II", "ME2");
  }
}

module.exports = Shrink;

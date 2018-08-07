"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Panic extends UnimplementedCard {
  constructor (game) {
    super(game, "Panic", "Masters Edition II", "ME2");
  }
}

module.exports = Panic;

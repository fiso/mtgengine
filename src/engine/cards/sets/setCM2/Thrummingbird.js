"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thrummingbird extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrummingbird", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Thrummingbird;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Derelor extends UnimplementedCard {
  constructor (game) {
    super(game, "Derelor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Derelor;

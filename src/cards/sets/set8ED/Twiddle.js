"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Twiddle extends UnimplementedCard {
  constructor (game) {
    super(game, "Twiddle", "Eighth Edition", "8ED");
  }
}

module.exports = Twiddle;

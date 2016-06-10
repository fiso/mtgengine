"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Twiddle extends UnimplementedCard {
  constructor (game) {
    super(game, "Twiddle", "Collector's Edition", "CED");
  }
}

module.exports = Twiddle;

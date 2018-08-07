"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinelessThug extends UnimplementedCard {
  constructor (game) {
    super(game, "Spineless Thug", "Tenth Edition", "10E");
  }
}

module.exports = SpinelessThug;

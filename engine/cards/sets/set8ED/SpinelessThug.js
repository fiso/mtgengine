"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinelessThug extends UnimplementedCard {
  constructor(game) {
    super(game, "Spineless Thug", "Eighth Edition", "8ED");
  }
}

module.exports = SpinelessThug;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofJustice extends UnimplementedCard {
  constructor (game) {
    super(game, "Hand of Justice", "Masters Edition", "MED");
  }
}

module.exports = HandofJustice;

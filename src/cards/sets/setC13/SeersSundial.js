"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeersSundial extends UnimplementedCard {
  constructor(game) {
    super(game, "Seer's Sundial", "Commander 2013 Edition", "C13");
  }
}

module.exports = SeersSundial;

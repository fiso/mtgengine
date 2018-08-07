"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeersSundial extends UnimplementedCard {
  constructor (game) {
    super(game, "Seer's Sundial", "Commander 2018", "C18");
  }
}

module.exports = SeersSundial;

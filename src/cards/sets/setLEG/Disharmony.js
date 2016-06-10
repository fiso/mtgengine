"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disharmony extends UnimplementedCard {
  constructor (game) {
    super(game, "Disharmony", "Legends", "LEG");
  }
}

module.exports = Disharmony;

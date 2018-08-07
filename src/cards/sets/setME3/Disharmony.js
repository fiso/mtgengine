"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disharmony extends UnimplementedCard {
  constructor (game) {
    super(game, "Disharmony", "Masters Edition III", "ME3");
  }
}

module.exports = Disharmony;

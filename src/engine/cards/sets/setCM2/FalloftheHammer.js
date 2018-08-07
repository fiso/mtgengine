"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalloftheHammer extends UnimplementedCard {
  constructor (game) {
    super(game, "Fall of the Hammer", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FalloftheHammer;

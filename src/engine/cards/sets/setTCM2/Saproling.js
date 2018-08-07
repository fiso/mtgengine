"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Saproling extends UnimplementedCard {
  constructor (game) {
    super(game, "Saproling", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Saproling;

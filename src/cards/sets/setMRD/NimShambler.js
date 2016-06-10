"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimShambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Nim Shambler", "Mirrodin", "MRD");
  }
}

module.exports = NimShambler;

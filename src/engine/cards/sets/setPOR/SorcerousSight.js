"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorcerousSight extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorcerous Sight", "Portal", "POR");
  }
}

module.exports = SorcerousSight;

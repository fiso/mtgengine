"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisCare extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Care", "Invasion", "INV");
  }
}

module.exports = TeferisCare;

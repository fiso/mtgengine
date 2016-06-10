"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisMoat extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Moat", "Invasion", "INV");
  }
}

module.exports = TeferisMoat;

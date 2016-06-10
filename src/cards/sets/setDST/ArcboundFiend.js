"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Fiend", "Darksteel", "DST");
  }
}

module.exports = ArcboundFiend;

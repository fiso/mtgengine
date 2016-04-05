"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundBruiser extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcbound Bruiser", "Darksteel", "DST");
  }
}

module.exports = ArcboundBruiser;

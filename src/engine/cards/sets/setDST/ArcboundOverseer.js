"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundOverseer extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Overseer", "Darksteel", "DST");
  }
}

module.exports = ArcboundOverseer;

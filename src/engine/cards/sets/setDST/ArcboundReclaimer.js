"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundReclaimer extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Reclaimer", "Darksteel", "DST");
  }
}

module.exports = ArcboundReclaimer;

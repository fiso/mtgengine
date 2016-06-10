"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PteronGhost extends UnimplementedCard {
  constructor (game) {
    super(game, "Pteron Ghost", "Darksteel", "DST");
  }
}

module.exports = PteronGhost;

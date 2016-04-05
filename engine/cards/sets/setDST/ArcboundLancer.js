"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundLancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcbound Lancer", "Darksteel", "DST");
  }
}

module.exports = ArcboundLancer;

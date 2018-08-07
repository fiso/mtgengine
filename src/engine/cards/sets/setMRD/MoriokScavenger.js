"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoriokScavenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Moriok Scavenger", "Mirrodin", "MRD");
  }
}

module.exports = MoriokScavenger;

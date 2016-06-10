"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SakuraTribeElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Sakura-Tribe Elder", "Archenemy", "ARC");
  }
}

module.exports = SakuraTribeElder;

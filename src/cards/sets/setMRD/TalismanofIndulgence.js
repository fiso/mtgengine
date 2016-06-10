"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalismanofIndulgence extends UnimplementedCard {
  constructor (game) {
    super(game, "Talisman of Indulgence", "Mirrodin", "MRD");
  }
}

module.exports = TalismanofIndulgence;

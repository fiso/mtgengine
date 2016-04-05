"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalismanofProgress extends UnimplementedCard {
  constructor(game) {
    super(game, "Talisman of Progress", "Mirrodin", "MRD");
  }
}

module.exports = TalismanofProgress;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalismanofUnity extends UnimplementedCard {
  constructor (game) {
    super(game, "Talisman of Unity", "Mirrodin", "MRD");
  }
}

module.exports = TalismanofUnity;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmissaryofHope extends UnimplementedCard {
  constructor (game) {
    super(game, "Emissary of Hope", "Darksteel", "DST");
  }
}

module.exports = EmissaryofHope;

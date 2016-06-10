"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HinterlandHermit extends UnimplementedCard {
  constructor (game) {
    super(game, "Hinterland Hermit", "Dark Ascension", "DKA");
  }
}

module.exports = HinterlandHermit;

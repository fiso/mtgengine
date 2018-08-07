"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonyHorse extends UnimplementedCard {
  constructor (game) {
    super(game, "Ebony Horse", "Masters Edition IV", "ME4");
  }
}

module.exports = EbonyHorse;

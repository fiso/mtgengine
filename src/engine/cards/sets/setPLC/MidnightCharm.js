"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Midnight Charm", "Planar Chaos", "PLC");
  }
}

module.exports = MidnightCharm;

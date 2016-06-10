"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiracyCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Piracy Charm", "Planar Chaos", "PLC");
  }
}

module.exports = PiracyCharm;

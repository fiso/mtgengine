"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelesnyaCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Selesnya Charm", "Commander Anthology", "CMA");
  }
}

module.exports = SelesnyaCharm;

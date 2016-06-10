"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmeraldCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Emerald Charm", "Visions", "VIS");
  }
}

module.exports = EmeraldCharm;

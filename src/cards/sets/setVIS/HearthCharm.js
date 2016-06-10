"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HearthCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Hearth Charm", "Visions", "VIS");
  }
}

module.exports = HearthCharm;

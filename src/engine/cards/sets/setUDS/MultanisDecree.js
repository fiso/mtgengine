"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MultanisDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Multani's Decree", "Urza's Destiny", "UDS");
  }
}

module.exports = MultanisDecree;

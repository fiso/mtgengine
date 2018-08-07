"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlashPanther extends UnimplementedCard {
  constructor (game) {
    super(game, "Slash Panther", "New Phyrexia", "NPH");
  }
}

module.exports = SlashPanther;

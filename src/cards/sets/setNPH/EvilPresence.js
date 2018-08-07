"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvilPresence extends UnimplementedCard {
  constructor (game) {
    super(game, "Evil Presence", "New Phyrexia", "NPH");
  }
}

module.exports = EvilPresence;

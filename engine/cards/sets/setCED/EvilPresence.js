"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvilPresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Evil Presence", "Collector's Edition", "CED");
  }
}

module.exports = EvilPresence;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvilPresence extends Card {
  constructor(game) {
    super(game, "Evil Presence", "Collector's Edition", "CED");
  }
}

module.exports = EvilPresence;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KyrenArchive extends Card {
  constructor(game) {
    super(game, "Kyren Archive", "Mercadian Masques", "MMQ");
  }
}

module.exports = KyrenArchive;

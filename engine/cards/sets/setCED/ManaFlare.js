"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaFlare extends Card {
  constructor(game) {
    super(game, "Mana Flare", "Collector's Edition", "CED");
  }
}

module.exports = ManaFlare;

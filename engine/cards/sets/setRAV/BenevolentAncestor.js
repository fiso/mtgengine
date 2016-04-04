"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenevolentAncestor extends Card {
  constructor(game) {
    super(game, "Benevolent Ancestor", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BenevolentAncestor;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenevolentAncestor extends UnimplementedCard {
  constructor(game) {
    super(game, "Benevolent Ancestor", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BenevolentAncestor;

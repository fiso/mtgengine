"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaTithe extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Tithe", "Magic Player Rewards 2008", "P08");
  }
}

module.exports = ManaTithe;
